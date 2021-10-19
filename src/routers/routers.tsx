import React from "react";
import Home from "pages/Home";
import ActionButtons from "pages/ActionButtons";
import Questions from "pages/Questions";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/actionbuttons" component={ActionButtons} />
        <Route exact path="/questions" component={Questions} />
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
