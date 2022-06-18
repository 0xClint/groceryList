import { ADD_ITEM, DELETE_ITEM, SEARCH_ITEM } from "./action-types";

export const addItem = (data) => {
  console.log(data);
  return {
    type: ADD_ITEM,
    data,
  };
};

export const deleteItem = (data) => {
  return {
    type: DELETE_ITEM,
    data,
  };
};

export const searchItem = (query) => {
  return {
    type: SEARCH_ITEM,
    query,
  };
};
