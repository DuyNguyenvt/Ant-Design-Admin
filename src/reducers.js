import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import history from "utils/history.js";
import globalReducer from "containers/App/reducer";
import modalReducer from "containers/Modals/reducer";
import productReducer from "containers/Product/reducer";

function createReducer(injectedReducers = {}) {
  const procReducer = combineReducers({
    // * add global reducer here
    global: globalReducer,
    modal: modalReducer,
    product: productReducer,
    router: connectRouter(history),
    ...injectedReducers, // * this is the reducer injected later
  });
  return procReducer;
}

export default createReducer;
