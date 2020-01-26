import { initialState } from "./initialState";

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "SET_USERS":
      return { ...state, fetch: userItemsReducers(state.fetch, action) };
    case "SET_USERS_ERROR":
      return { ...state, fetch: userItemsReducers(state.fetch, action) };
    case "REMOVE_ITEM":
      return { ...state, fetch: userItemsReducers(state.fetch, action) };
    case "TOGGLE_EDIT":
      return { ...state, fetch: userItemsReducers(state.fetch, action) };
    case "SAVE_INPUT":
      return { ...state, fetch: userItemsReducers(state.fetch, action) };
    default:
      return state;
  }
};

// Reducer composition
function userItemsReducers(state, action) {
  switch (action.type) {
    case "SET_USERS":
      return updateObject(state, {
        isFetching: false,
        items: [...action.payload]
      });
    case "SET_USERS_ERROR":
      return updateObject(state, {
        didInvalidate: true
      });
    case "REMOVE_ITEM":
      return updateObject(state, {
        items: removeFromArray(state.items, action.payload)
      });
    case "TOGGLE_EDIT":
      return updateObject(state, {
        items: updateItemInArray(state.items, action.payload, function(item) {
          return updateObject(item, { editing: !item.editing });
        })
      });
    case "SAVE_INPUT":
      return updateObject(state, {
        items: updateItemInArray(state.items, action.payload.id, function(
          item
        ) {
          return updateObject(item, {
            editing: false,
            name: action.payload.input
          });
        })
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

function removeFromArray(array, itemId) {
  const tempArr = array.slice();
  tempArr.forEach((item, index) => {
    if (item.id === itemId) {
      tempArr.splice(index, 1);
    }
  });
  return tempArr;
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
