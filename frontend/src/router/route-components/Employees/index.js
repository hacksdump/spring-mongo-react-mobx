import React from "react";
import styles from "./Employee.module.scss";
import EmployeeCard from "../../../components/EmployeeCard";

export default function Employees(props) {
  const employees = props.employees;
  props.fetchEmployees();
  return (
    <div className={styles.container}>
      {employees.map((employeeData) =>
        employeeData.name && employeeData.phone && employeeData.address ? (
          <EmployeeCard
            name={employeeData.name}
            phone={employeeData.phone}
            email={employeeData.email}
            address={employeeData.address}
            gender={employeeData.gender}
            department={employeeData.department}
          />
        ) : null
      )}
    </div>
  );
}
