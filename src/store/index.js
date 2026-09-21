import { createStore, applyMiddleware } from "redux";
import clientReducer from "./reducers/clientReducer";
import { thunk } from "redux-thunk";
import productReducer from "./reducers/productReducer";

const rootReducer = (state, action) => ({
  ...clientReducer(state, action),
  product: productReducer(state?.product, action),
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;