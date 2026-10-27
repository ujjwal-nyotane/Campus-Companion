import { configureStore } from '@reduxjs/toolkit';
import noticesReducer from './noticesSlice';

// The Redux store — combine all feature slices here as the app grows
const store = configureStore({
    reducer: {
        notices: noticesReducer,
    },
});

export default store;
