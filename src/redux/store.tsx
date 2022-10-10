import { configureStore } from '@reduxjs/toolkit';
import { labelsApi } from './labelsApi';

export const store = configureStore({
  reducer: {
    [labelsApi.reducerPath]: labelsApi.reducer,
    // issues: issuesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(labelsApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
