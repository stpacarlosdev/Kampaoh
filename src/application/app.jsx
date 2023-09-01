import React, { Fragment } from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import modules from "./modules";

const App = () => {
  const history = createBrowserHistory();

  return (
    <Fragment>
      <Router history={history}>
        {modules.map((module) => (
          <Route {...module.routeProps} key={module.name} />
        ))}
      </Router>
    </Fragment>
  );
};

export default App;
