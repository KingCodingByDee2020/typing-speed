import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Scores from "./Scores";
import Test from "./Test";

function Main() {
  return (
    <Router>
      <Switch>
        <Route path="/Test">
          <Test />
        </Route>

        {/* TODO: Find out why the 'home page' has to be at the bottom. */}
        <Route path="/">
          <Scores />
        </Route>
      </Switch>
    </Router>
  );
}

export default Main;
