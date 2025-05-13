import { configureStore } from '@reduxjs/toolkit';

import homeSlice from './features/homeSlice';
import servicesSlice from './features/servicesSlice';
import standardsSlice from './features/standardsSlice';
import settingsSlice from './features/settingsSlice';
import oneMinPageSlice from './features/oneMinPageSlice';
import additionalPagesSlice from './features/additionalPages.slice';

const store = configureStore({
  reducer: {
    home: homeSlice,
    services: servicesSlice,
    standards: standardsSlice,
    settings: settingsSlice,
    oneMinPage: oneMinPageSlice,
    additionalPages: additionalPagesSlice
  },
});

export default store;
