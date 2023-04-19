import { combineReducers, configureStore } from '@reduxjs/toolkit';
import formReducer from './forms';
import searchReducer from './search';

const rootReducer = combineReducers({
  formReducer,
  searchReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
