import React from "react";
import Home from "./route-components/Home/index";
import Employees from "./route-components/Employees/index";

const routeLinkData = [
  {
    path: "/",
    displayText: "Home",
    component: <Home />,
    exact: true,
  },
  {
    path: "/employees",
    displayText: "Employees",
    component: <Employees />,
  },
];

export default routeLinkData;
