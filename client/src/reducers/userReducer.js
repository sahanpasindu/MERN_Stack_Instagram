export const intialState = null;
export const reducer = (state, action) => {
  if (action.type == "USER") {
    return action.payload;
  }
  if (action.type == "CLEAR") {
    return null;
  }
  return state;
};

// So basically reducer is like instead  of having multiple setState  in different functions , u can have them all on one place
