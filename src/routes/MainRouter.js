import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "../screens/Home";
import About from "../screens/About";
import List from "../screens/List";

export default function MainRouter() {
  return (
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/list">
        <List />
      </Route>
      <Route exact path="/">
        <Redirect to="list" />
      </Route>
    </Switch>
  );
}

// Link only for local pages
// <Link to="/about"> About </Link>
