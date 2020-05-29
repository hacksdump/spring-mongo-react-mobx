import React from "react";
import "./App.scss";

import RoutedApp from "./router/RoutedApp";
import { observer } from "mobx-react";

const App = observer((props) => {
  return <RoutedApp store={props.store} />;
});

export default App;
