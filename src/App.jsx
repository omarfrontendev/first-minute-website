import { useEffect, useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import RoutesPages from './pages/RoutesPages';
import { BsWifiOff } from "react-icons/bs";
import MainBgSectionImg from './components/layout/main-bg-section';
import { useDispatch } from 'react-redux';
import { fetchServicesData } from './redux/services/services.services';
import { fetchAdditionalPages } from './redux/services/additionalPages.services';
import { fetchSettingsData } from './redux/services/settings.services';
import ContactUs from './components/contact-us';

import './styles/global.css';
import 'react-loading-skeleton/dist/skeleton.css'

function App() {

  const [status, setStatus] = useState(navigator.onLine);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServicesData());
    dispatch(fetchAdditionalPages());
    dispatch(fetchSettingsData());
  }, [])

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
          <h1 className='_fm-main-title mt-3 mb-2'>فقد الاتصال بالشبكة</h1>
          <p className='_fm-main-desc'>يبدو أنه لا يوجد اتصال بالإنترنت حالياً. يُرجى التحقق من حالة الشبكة الخاصة بك، ثم المحاولة مرة أخرى.</p>
        </div>
      </MainBgSectionImg>
    )
  );

  return (
    <NetRequired>
      <Header />
      <RoutesPages />
      <ContactUs />
      <Footer />
    </NetRequired>
  );
}

export default App;