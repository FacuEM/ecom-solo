import { combineReducers } from "redux";

import productsReducer from "./Product/products.reducers";
import userReducer from "./User/user.reducer";
import cartReducer from "./Cart/cart.reducers";

export default combineReducers({
  user: userReducer,
  productsData: productsReducer,
  cartData: cartReducer,
});
