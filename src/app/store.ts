import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { conversationApi } from '../services/conversations';

export const store = configureStore({
  reducer: {
    [conversationApi.reducerPath]: conversationApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(conversationApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
