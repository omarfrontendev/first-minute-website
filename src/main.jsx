import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { CountryCodesProvider } from './context/CountriesContext.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import { ToastContainer } from 'react-toastify';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'swiper/css/bundle';



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <CountryCodesProvider>
        <App />
        <ToastContainer rtl />
      </CountryCodesProvider>
    </Provider>
  </BrowserRouter>
)
