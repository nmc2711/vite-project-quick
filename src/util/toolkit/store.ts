import {
  Action,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';

import { myInfoReducer } from '~/features/myInfo';

export const store = configureStore({
  reducer: {
    myInfo: myInfoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;