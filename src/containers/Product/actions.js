import * as constants from "./constants";

export function getProducts(requestData) {
  return {
    type: constants.GET_PRODUCTS,
    requestData,
  };
}

export function getProductsSuccess(payload) {
  return {
    type: constants.GET_PRODUCTS_SUCCESS,
    payload,
  };
}

export function getProductsFailed() {
  return {
    type: constants.GET_PRODUCTS_FAILED,
  };
}
