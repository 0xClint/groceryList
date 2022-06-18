import { ADD_ITEM, DELETE_ITEM, SEARCH_ITEM } from "./action-types";

const initialList = () => {
  const list = localStorage.getItem("grocery-list");
  let items = [];
  if (list) {
    items = JSON.parse(list);
    // console.log(expense);
  }
  return items;
};

const initialState = {
  groceryList: initialList(),
  query: "",
};

export const groceryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      localStorage.setItem(
        "grocery-list",
        JSON.stringify([...state.groceryList, action.data])
      );
      return {
        ...state,
        groceryList: [...state.groceryList, action.data],
      };
    }

    case DELETE_ITEM: {
      const { data } = action;
      const updatedList = state.groceryList.filter(
        (item) => item.createdAt !== data.createdAt
      );
      localStorage.setItem("grocery-list", JSON.stringify(updatedList));
      return {
        ...state,
        groceryList: updatedList,
      };
    }

    case SEARCH_ITEM: {
      const { query } = action;
      return {
        ...state,
        query,
      };
    }
    default:
      return state;
  }
};
