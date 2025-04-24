import React, { useEffect, useRef, useState } from 'react';

const ExpandedWord = ({ baseText, filler = 'ـ' }) => {
  const containerRef = useRef(null);
  const [finalText, setFinalText] = useState(baseText);

  useEffect(() => {
    const updateText = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerWidth = container.offsetWidth;
      const computedStyles = window.getComputedStyle(container);
      const fontSizeValue = parseFloat(computedStyles.fontSize);
      const fontFamily = computedStyles.fontFamily;
      const fontWeight = computedStyles.fontWeight;

      const measure = (text) => {
        const span = document.createElement('span');
        span.style.visibility = 'hidden';
        span.style.position = 'absolute';
        span.style.whiteSpace = 'nowrap';
        span.style.fontSize = `${fontSizeValue}px`;
        span.style.fontFamily = fontFamily;
        span.style.fontWeight = fontWeight;
        span.style.direction = 'rtl';
        span.innerText = text;
        document.body.appendChild(span);
        const width = span.offsetWidth;
        document.body.removeChild(span);
        return width;
      };

      const originalWidth = measure(baseText);
      const fillerWidth = measure(filler);
      const spaceToFill = containerWidth - originalWidth;

      const numberOfFillers = Math.max(0, Math.floor(spaceToFill / fillerWidth));
      const middleIndex = 18;
      const left = baseText.slice(0, middleIndex);
      const right = baseText.slice(middleIndex);

      const newText = `${left}${filler.repeat(numberOfFillers)}${right}`;
      setFinalText(newText);
    };

    requestAnimationFrame(updateText);

    window.addEventListener('resize', updateText);
    return () => window.removeEventListener('resize', updateText);
  }, [baseText, filler]);


  return (
    <h2
      ref={containerRef}
      style={{
        whiteSpace: 'nowrap',
        direction: 'rtl',
      }}
      className='_fm-section-title text-center mb-5 overflow-hidden'
    >
      {finalText}
    </h2>
  );
};

export default ExpandedWord;
