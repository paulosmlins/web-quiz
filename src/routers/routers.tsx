import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "pages/Home";
import ActionButtons from "pages/ActionButtons";
import Questions from "pages/Questions";
import Header from "components/Header";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/actionbuttons/questions"
          component={ActionButtons}
        />
        <Route exact path="/questions" component={Questions} />
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
