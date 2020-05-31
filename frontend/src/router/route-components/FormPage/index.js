import React from "react";
import NewEmployeeForm from "components/NewEmployeeForm";
import styles from "./FormPage.module.scss";
export default function FormPage(props) {
  props.fetchDepartments();
  return (
    <div className={styles.container}>
      <NewEmployeeForm
        departments={props.departments}
        createEmployee={props.createEmployee}
      />
    </div>
  );
}
