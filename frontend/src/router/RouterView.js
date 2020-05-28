import { Route, Switch } from "react-router-dom";
import React from "react";

import routeConfig from "./routeConfig";
import Employees from "./route-components/Employees";
import Home from "./route-components/Home";

export default function RouterView() {
  return (
    <Switch>
      {routeConfig.map((routeData) => (
        <Route
          path={routeData.path}
          exact={routeData.exact}
          render={() => routeData.component}
        ></Route>
      ))}
    </Switch>
  );
}
