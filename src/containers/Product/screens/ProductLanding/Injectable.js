import { compose } from "redux";
import { connect } from "react-redux";

import ProductLanding from ".";

const mapStateToProps = (state) => {
  const productDomain = state.product;
  return {
    productsMasterData: productDomain.products,
    // accessToken: globalDomain.accessToken,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     dispatch,
//   };
// };

// const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withConnect = connect(mapStateToProps);

export default compose(withConnect)(ProductLanding);
