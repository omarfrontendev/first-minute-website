import { useEffect, useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import RoutesPages from './pages/RoutePages';
import { BsWifiOff } from "react-icons/bs";

import './styles/global.css';
import 'react-loading-skeleton/dist/skeleton.css'
import MainBgSectionImg from './components/layout/main-bg-section';

function App() {

  const [status, setStatus] = useState(navigator.onLine);

  useEffect(() => {

    const online = () => {
      setStatus(true);
    };
    const offline = () => {
      setStatus(false);
    };

    window.addEventListener('online', online);
    window.addEventListener('offline', offline);

    return () => {
      window.removeEventListener('online', online);
      window.removeEventListener('offline', offline);
    };

  }, []);

  const NetRequired = ({ children }) => (
    status ? children : (
      <MainBgSectionImg>
        <div className='d-flex align-items-center justify-content-center flex-column text-center h-100' style={{ minHeight: "100vh" }}>
          <BsWifiOff size={72} color="#f00" />
          <h1 className='_fm-main-title mt-3 mb-2'>الاتصال مفقود</h1>
          <p className='_fm-main-desc'>يبدو إن الإنترنت عندك مفصول. يرجى التأكد من إن الاتصال شغّال وحاول مرة تانية.</p>
        </div>
      </MainBgSectionImg>
    )
  );

  return (
    <NetRequired>
      <Header />
      <RoutesPages />
      <Footer />
    </NetRequired>
  );
}

export default App;