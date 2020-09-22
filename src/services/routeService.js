import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import { urlRoutes } from "constants/routes";

export const withRouteService = (Component) => (props) => {
  let ComponentWithRouter = withRouter(Component);
  return (
    <Router>
      <ComponentWithRouter
        urlRoutes={urlRoutes}
        Switch={Switch}
        Route={Route}
        Link={Link}
        {...props}
      />
    </Router>
  );
};
