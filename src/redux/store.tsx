import { configureStore } from '@reduxjs/toolkit';
import labelsReducer from './labels/labelsSlice';
// import issuesReducer from './issues/issues';

const store = configureStore({
  reducer: {
    labels: labelsReducer,
    // issues: issuesReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
