import { Route, Switch } from "react-router-dom";
import React from "react";

import routeConfig from "./routeConfig";
import styles from "./RouterView.module.scss";

export default function RouterView() {
  return (
    <div className={styles.container}>
      <Switch>
        {routeConfig.map((routeData) => (
          <Route
            path={routeData.path}
            exact={routeData.exact}
            render={() => routeData.component}
          ></Route>
        ))}
      </Switch>
    </div>
  );
}
