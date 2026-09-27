

export const setCart = (cart) => ({
  type: "SET_CART",
  payload: cart,
});

export const setPayment = (payment) => ({
  type: "SET_PAYMENT",
  payload: payment,
});

export const setAddress = (address) => ({
  type: "SET_ADDRESS",
  payload: address,
});

export const increaseCartItem = (productId) => ({
  type: "INCREASE_CART_ITEM",
  payload: productId,
});

export const decreaseCartItem = (productId) => ({
  type: "DECREASE_CART_ITEM",
  payload: productId,
});

export const removeCartItem = (productId) => ({
  type: "REMOVE_CART_ITEM",
  payload: productId,
});

export const toggleCartItem = (productId) => ({
  type: "TOGGLE_CART_ITEM",
  payload: productId,
});