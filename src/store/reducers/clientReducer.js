

const initialState = {
  user: null,
  categories:[]
};

  const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_CATEGORIES":
      return {...state,categories:action.payload}
    default:
      return state;
  }
};

export default clientReducer;