import { combineReducers, createStore } from "redux";
import { groceryReducer } from "./reducers";

const reducer = combineReducers({
  items: groceryReducer,
});

const initialState = {};

const store = createStore(reducer, initialState);

export default store;
