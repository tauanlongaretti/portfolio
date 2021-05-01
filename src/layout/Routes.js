import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import FirstProject from "../components/FirstProject";
import SecondProject from "../components/SecondProject";
import ThirdProject from "../components/ThirdProject";
import Contact from "../components/Contact";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/first-project" component={FirstProject} />
      <Route path="/second-project" component={SecondProject} />
      <Route path="/third-project" component={ThirdProject} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
};

export default Routes;
