import { takeLatest, put } from "redux-saga/effects";
import * as constants from "./constants";
import * as actions from "./actions";

// sagas
function* onGetProducts(action) {
  try {
    yield put(actions.getProductsSuccess(action.payload));
  } catch (err) {
    throw err;
  }
}

export default function* saga() {
  yield takeLatest(constants.GET_PRODUCTS, onGetProducts);
}
