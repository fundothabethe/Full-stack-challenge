//initial state
const initialState = {
  count: 0,
};

//actions

const actionType = {
  type: "ADD_JOKE",
};

//reducer
const reducer = (state = initialState.count, action) => {
  switch (action.type) {
    case actionType.type:
      return state + 1;
    default:
      return state;
  }
};

export default reducer;
