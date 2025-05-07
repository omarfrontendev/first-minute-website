import { configureStore } from '@reduxjs/toolkit';

import homeSlice from './features/homeSlice';
import servicesSlice from './features/servicesSlice';
import standardsSlice from './features/standardsSlice';
import settingsSlice from './features/settingsSlice';

const store = configureStore({
  reducer: {
    home: homeSlice,
    services: servicesSlice,
    standards: standardsSlice,
    settings: settingsSlice,
  },
});

export default store;
