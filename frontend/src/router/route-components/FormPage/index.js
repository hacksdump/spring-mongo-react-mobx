import React from "react";
import NewEmployeeForm from "components/NewEmployeeForm";
import styles from "./FormPage.module.scss";
export default function FormPage() {
  return (
    <div className={styles.container}>
      <NewEmployeeForm />
    </div>
  );
}
