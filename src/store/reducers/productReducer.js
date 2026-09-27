const initialState = {
  product: null,
  products: [],
  total: 0,
  categories: [],
  limit: 25,
  offset: 0,
  fetchState: "NOT_FETCHED",
  filter: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCT":
      return {
        ...state,
        product: action.payload,
      };
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "SET_TOTAL":
      return {
        ...state,
        total: action.payload,
      };
    case "SET_FETCH_STATE":
      return {
        ...state,
        fetchState: action.payload,
      };
    case "SET_LIMIT":
      return {
        ...state,
        limit: action.payload,
      };
    case "SET_OFFSET":
      return {
        ...state,
        offset: action.payload,
      };
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    case "SET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
