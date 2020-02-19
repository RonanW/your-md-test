import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers";

export const initStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk))
}
