import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer, Flip } from "react-toastify";

import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import "themes/css/App.css";
import "themes/scss/main.scss";
import "GlobalStyle.scss";
import "antd/dist/antd.css";

// import Portfolio from "containers/App/screens/Portfolio";
// import Resume from "containers/App/screens/Resume";
// import ResumeReview from "containers/App/screens/ResumeReview";
import Modals from "containers/Modals/Injectable";
import Product from "containers/Product/Injectable";
import { withMainLayout } from "components/Layouts";

function App(props) {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <div> this is the dashboardd screen</div>}
        />
        <Route exact path="/product" component={withMainLayout(Product)} />
        <Redirect to="/" />
      </Switch>
      <ToastContainer
        className="ncp-toast"
        transition={Flip}
        hideProgressBar
        autoClose={2000}
      />
      <Modals />
    </div>
  );
}

export default App;
