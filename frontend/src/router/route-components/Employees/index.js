import React, { useState } from "react";
import { getAllEmployees } from "api";
import Card from "antd/es/card";
import styles from "./Employee.module.scss";

export default function Index() {
  const [employees, setEmployees] = useState([]);
  const [fetched, setFetchedStatus] = useState(false);
  console.log(fetched, employees, this);
  if (!fetched) {
    getAllEmployees().then((data) => setEmployees(data));
    setFetchedStatus(true);
  }
  return (
    <div className={styles.container}>
      {employees.map((employeeData) =>
        employeeData.name && employeeData.phone && employeeData.address ? (
          <Card className={styles.card} title={employeeData.name}>
            <p className={styles.phone}>{employeeData.phone}</p>
            <p className={styles.address}>{employeeData.address}</p>
          </Card>
        ) : null
      )}
    </div>
  );
}
