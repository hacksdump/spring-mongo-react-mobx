import React from "react";
import Home from "./route-components/Home";
import Employees from "./route-components/Employees";

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
