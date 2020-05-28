import React, { useState } from "react";
import { getAllEmployees } from "api";
import Card from "antd/es/card";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [fetched, setFetchedStatus] = useState(false);
  console.log(fetched, employees, this);
  if (!fetched) {
    getAllEmployees().then((data) => setEmployees(data));
    setFetchedStatus(true);
  }
  return (
    <div>
      {employees.map((employeeData) => (
        <Card style={{ width: 300 }}>
          <p>{employeeData.name}</p>
        </Card>
      ))}
    </div>
  );
}
