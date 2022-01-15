import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Header } from "src/components/Header";
import { Home } from "src/pages/home";
import { Service } from "src/pages/service";

const Routes = () => {
  return (
    <Route path={`/`}>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/page/:uuid" exact component={Service} />
        <Redirect to="/home" />
      </Switch>
    </Route>
  );
};
export default Routes;
