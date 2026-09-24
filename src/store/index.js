import { createStore, applyMiddleware } from "redux";
import clientReducer from "./reducers/clientReducer";
import { thunk } from "redux-thunk";
import productReducer from "./reducers/productReducer";
import shoppingCartReducer from "./reducers/shoppingCartReducer";
import { createLogger } from "redux-logger";

const logger = createLogger();

const rootReducer = (state, action) => ({
  ...clientReducer(state, action),
  product: productReducer(state?.product, action),
  shoppingCart: shoppingCartReducer(state?.shoppingCart, action)
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk,logger)
);

export default store;