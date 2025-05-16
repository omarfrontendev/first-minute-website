import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/home';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServicesData, getServiceById } from './redux/services/services.services';
import { fetchAdditionalPageContent, fetchAdditionalPages } from './redux/services/additionalPages.services';
import PageTemplate from './components/PageTemplate/PageTemplate';
import { fetchOneMinPageData } from './redux/services/oneMinPage.services';
import { fetchStandardsData } from './redux/services/standards.services';

import './styles/global.css';
import 'react-loading-skeleton/dist/skeleton.css'

function App() {
  const [progress, setProgress] = useState(null);
  const dispatch = useDispatch();
  const { status, data: dynamicPages } = useSelector(state => state.additionalPages);

  useEffect(() => {
    dispatch(fetchServicesData());
    dispatch(fetchAdditionalPages());
  }, []);

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

  if (status !== "succeeded") return <div style={{ minHeight: "100vh" }}></div>;

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home progress={progress} />} />
        <Route path='/first-minute' element={<PageTemplate onGetData={() => dispatch(fetchOneMinPageData())} />} />
        <Route path={`/standards`} element={<PageTemplate onGetData={() => dispatch(fetchStandardsData())} />} />
        <Route path={`/services/:id`} element={<PageTemplate onGetData={(id) => dispatch(getServiceById(id))} />} />
        {dynamicPages.map(page => (
          <Route key={page?.id} path={`/${page?.id}`} element={<PageTemplate onGetData={() => dispatch(fetchAdditionalPageContent(page?.id))} />} />
        ))}
      </Routes>
      <Footer />
    </>
  );
}

export default App;