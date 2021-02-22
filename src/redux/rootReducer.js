import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import productsReducer from "./Product/products.reducers";
import userReducer from "./User/user.reducer";
import cartReducer from "./Cart/cart.reducers";
import ordersReducer from './Orders/orders.reducers'

export const rootReducer = combineReducers({
  user: userReducer,
  productsData: productsReducer,
  cartData: cartReducer,
  ordersData: ordersReducer
});

const configStorage = {
  key: "root",
  storage,
  whitelist: ["cartData"],
};

export default persistReducer(configStorage, rootReducer);
