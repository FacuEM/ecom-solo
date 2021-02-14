import { all, call } from "redux-saga/effects";
import userSagas from "./User/user.sagas";
import productsSagas from './Product/product.sagas';

export default function* rootSaga() {
  yield all([call(userSagas), call(productsSagas)]);
}
