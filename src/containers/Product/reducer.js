// reducers
import * as constants from "./constants";

const initState = {
  // accessToken: undefined,
  products: {},
};

//! notice that reducer is only a function that return new state object
const productReducer = (state = initState, action) => {
  return produce(state, (newState) => {
    switch (action.type) {
      case constants.GET_PRODUCTS:
        break;
      case constants.GET_PRODUCTS_SUCCESS:
        // newState.accessToken = action.payload;
        break;

      case constants.GET_PRODUCTS_FAILED:
        // newState.accessToken = action.payload;
        console.log("error when fetch products");
        break;
      default:
        break;
    }
  });
};

const produce = (state, setState) => {
  const newState = { ...state };
  setState(newState);
  return {
    ...state,
    ...newState,
  };
};

export default productReducer;
