import { compose } from "redux";
import { connect } from "react-redux";
import injectReducer from "utils/injectReducer";
import injectSaga from "utils/injectSaga";
import reducer from "./reducer";

import saga from "./saga";
import Product from ".";

// const mapStateToProps = (state) => {
//   const productDomain = state.product;
//   return {
//     // accessToken: globalDomain.accessToken,
//     product: productDomain.products,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     dispatch,
//   };
// };

const withReducer = injectReducer({ key: "product", reducer });
const withSaga = injectSaga({ key: "product", saga });

// const withConnect = connect(mapStateToProps, mapDispatchToProps);

// export default compose(withConnect, withSaga, withReducer)(Product);
export default compose(withSaga, withReducer)(Product);
