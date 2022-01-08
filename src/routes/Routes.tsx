import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Home } from "src/pages/home";

const Routes = () => {
  return (
    <Route path={`/`}>
      {/* <Header /> */}
      <Switch>
        <Route path="/home" exact component={Home} />
        <Redirect to="/home" />
      </Switch>
    </Route>
  );
};
export default Routes;
