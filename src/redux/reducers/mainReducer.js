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
    case "FETCH_USERS":
      return { ...state, list: [...action.payload] }; //fetchReducer(state.fetch, action) };
    default:
      return state;
  }
};

// Reducer composition:
/*function fetchReducer(state = {}, action) {
  switch (action.type) {
    case "FETCH_USERS":
      return { ...state, items: action.payload };
    default:
      return state;
  }
}*/

export default mainReducer;
