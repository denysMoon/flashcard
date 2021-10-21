import { Switch, Route } from "react-router-dom";
import List from "./List";
import About from "./About";
import Learn from "./Learn";

const AppRoute = () => {
  return (
    <Switch>
      <Route exact path="/">
        <List />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/learn">
        <Learn />
      </Route>
    </Switch>
  );
};

export default AppRoute;
