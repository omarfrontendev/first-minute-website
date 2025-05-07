import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './pages/home';
import FirstMinute from './pages/first-minute';
import Footer from './components/layout/Footer';

import './styles/global.css';

function App() {
  const [progress, setProgress] = useState(null);

  const onFinish = () => { };

  useEffect(() => {
    const images = document.images;
    const totalImages = images.length;
    let loadedImages = 0;

    const updateProgress = () => {
      loadedImages += 1;
      const newProgress = Math.floor((loadedImages / totalImages) * 100);
      setProgress(newProgress);

      if (newProgress === 100) {
        setTimeout(onFinish, 300);
      }
    };

    if (totalImages === 0) {
      setProgress(100);
      setTimeout(onFinish, 300);
      return;
    }

    for (let i = 0; i < totalImages; i++) {
      const img = images[i];
      if (img.complete) {
        updateProgress();
      } else {
        img.addEventListener('load', updateProgress);
        img.addEventListener('error', updateProgress);
      }
    }

    return () => {
      for (let i = 0; i < totalImages; i++) {
        const img = images[i];
        img.removeEventListener('load', updateProgress);
        img.removeEventListener('error', updateProgress);
      }
    };
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home progress={progress} />} />
        <Route path='/first-minute' element={<FirstMinute />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;