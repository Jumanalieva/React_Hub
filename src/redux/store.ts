import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from './slices/RootSlice'; // Adjust the path according to your project structure

// Define the type for process.env.NODE_ENV
declare const process: {
  env: {
    NODE_ENV: 'development' | 'production' | 'test';
  };
};

const store = configureStore({
  reducer: {
    events: eventsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools only in development
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
