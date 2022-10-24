import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { conversationApi } from '../services/conversations';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
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
