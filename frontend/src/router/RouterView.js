import {Route, Switch} from "react-router-dom";
import React from "react";

import routeConfig from "./routeConfig";

export default function RouterView() {
    return (
        <Switch>
            {routeConfig.map(routeData =>
                <Route path={routeData.path} exact={routeData.exact}>
                    {routeData.component}
                </Route>
            )}
        </Switch>
    )
}