import { configureStore } from '@reduxjs/toolkit';
import profile from './profile';
import notification from './notification';
import coreUi from './coreUi';

export const store = configureStore({
  reducer: { profile, notification, coreUi },
});

export type RootState = ReturnType<typeof store.getState>;
