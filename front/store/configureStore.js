import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";

const createStore = () => {
  // 미들웨어

  // 루트 리듀서
  const store = configureStore({
    reducer: rootReducer,
  });
  return store;
};

export default createStore;
