import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import ProductLanding from "./screens/ProductLanding/Injectable";

function Product(props) {
  return (
    <>
      <Switch>
        <Route path="/product" component={ProductLanding} />
      </Switch>
    </>
  );
}

export default Product;
