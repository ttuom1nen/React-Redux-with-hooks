// Implement action creator generator for larger apps
// https://redux.js.org/recipes/reducing-boilerplate/

export const increment = () => {
  return {
    type: "INCREMENT"
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT"
  };
};

export const removeItem = id => {
  return {
    type: "REMOVE_ITEM",
    payload: id
  };
};

export const toggleEdit = id => {
  return {
    type: "TOGGLE_EDIT",
    payload: id
  };
};

export const saveInput = (id, input) => {
  return {
    type: "SAVE_INPUT",
    payload: { id: id, input: input }
  };
};

export const fetchUsers = () => {
  return async function(dispatch) {
    try {
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(json =>
          dispatch({
            type: "SET_USERS",
            payload: json
          })
        );
    } catch (error) {
      dispatch({
        type: "SET_USERS_ERROR"
      });
    }
  };
};
