// Module Dependencies
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

// Module Pages
import Home from "../pages/Home/Home";
import Member from "../pages/Member/Member";

// Module main Component
const Routes = () => {
  const _routes = () => {
    return (
      <>
        <Switch>
          <Route exact path="/" name="Home" component={Home} />
          <Route exact path="/member/:id" name="Member" component={Member} />
          <Route render={() => <Redirect to="/404" />} />
        </Switch>
      </>
    );
  };

  return _routes();
};
export default Routes;
