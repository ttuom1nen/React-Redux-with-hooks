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

export const addItem = id => {
  return {
    type: "ADD_ITEM",
    payload: id
  };
};

export const removeItem = id => {
  return {
    type: "REMOVE_ITEM",
    payload: id
  };
};

export const fetchUsers = () => {
  return async function(dispatch, getState) {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json =>
        dispatch({
          type: "SET_USERS",
          payload: json
        })
      );
  };
};

/*
export const fetchUsers = () => {
  // Interpreted by the thunk middleware:
  return function(dispatch, getState) {
    const { posts } = getState();
    if (posts[userId]) {
      // There is cached data! Don't do anything.
      return;
    }
    dispatch({
      type: "LOAD_POSTS_REQUEST",
      userId
    });
    // Dispatch vanilla actions asynchronously
    fetch(`http://myapi.com/users/${userId}/posts`).then(
      response =>
        dispatch({
          type: "LOAD_POSTS_SUCCESS",
          userId,
          response
        }),
      error =>
        dispatch({
          type: "LOAD_POSTS_FAILURE",
          userId,
          error
        })
    );
  };
};
*/
