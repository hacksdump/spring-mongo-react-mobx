import React from "react";
import Home from "./route-components/Home/index";
import Employees from "./route-components/Employees/index";

const routeLinkData = [
  {
    path: "/",
    displayText: "Home",
    component: (props) => <Home {...props} />,
    exact: true,
    propKey: "homeProps",
  },
  {
    path: "/employees",
    displayText: "Employees",
    component: (props) => <Employees {...props} />,
    propKey: "employeeProps",
  },
];

export default routeLinkData;
