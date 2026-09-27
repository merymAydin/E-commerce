const initialState = {
  cart: [],
  payment: null,
  address: null,
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CART":
      return {
        ...state,
        cart: action.payload,
      };
    case "SET_PAYMENT":
      return {
        ...state,
        payment: action.payload,
      };
    case "SET_ADDRESS":
      return {
        ...state,
        address: action.payload,
      };
    case "INCREASE_CART_ITEM":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === action.payload
            ? { ...item, count: item.count + 1 }
            : item,
        ),
      };
    case "DECREASE_CART_ITEM":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === action.payload && item.count > 1
            ? { ...item, count: item.count - 1 }
            : item,
        ),
      };
    case "REMOVE_CART_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.payload),
      };
    case "TOGGLE_CART_ITEM":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === action.payload
            ? { ...item, checked: !item.checked }
            : item,
        ),
      };

    default:
      return state;
  }
};

export default shoppingCartReducer;
