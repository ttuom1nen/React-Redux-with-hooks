import { initialState } from "./initialState";

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "ADD_ITEM":
      return state;
    case "REMOVE_ITEM":
      return state;
    case "SET_USERS":
      return { ...state, fetch: fetchReducer(state.fetch, action) };
    default:
      return state;
  }
};

// Reducer composition:
function fetchReducer(state, action) {
  switch (action.type) {
    case "SET_USERS":
      return updateObject(state, {
        isFetching: false,
        items: [...action.payload]
      });
    default:
      return state;
  }
}

// Utility:
function updateObject(oldObject, newValues) {
  // Encapsulate the idea of passing a new object as the first parameter
  // to Object.assign to ensure we correctly copy data instead of mutating
  return Object.assign({}, oldObject, newValues);
}

function updateItemInArray(array, itemId, updateItemCallback) {
  const updatedItems = array.map(item => {
    if (item.id !== itemId) {
      // Since we only want to update one item, preserve all others as they are now
      return item;
    }
    // Use the provided callback to create an updated item
    const updatedItem = updateItemCallback(item);
    return updatedItem;
  });
  return updatedItems;
}

export default mainReducer;
