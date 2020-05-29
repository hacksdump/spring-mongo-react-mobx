import React from "react";
import Home from "./route-components/Home/index";
import Employees from "./route-components/Employees/index";
import FormPage from "./route-components/FormPage";

const routeLinkData = [
  {
    path: "/",
    displayText: "Home",
    component: (props) => <Home {...props} />,
    exact: true,
    propKey: "homeProps",
    key: "HOME",
  },
  {
    path: "/employees",
    displayText: "Employees",
    component: (props) => <Employees {...props} />,
    propKey: "employeeProps",
    key: "EMPLOYEES",
  },
  {
    path: "/add-employee",
    displayText: "Add",
    component: (props) => <FormPage {...props} />,
    propKey: "newEmployeeProps",
    key: "ADD_EMPLOYEE",
  },
];

export default routeLinkData;
