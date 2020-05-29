import styles from "./EmployeeCard.module.scss";
import { Card } from "antd";
import React from "react";

export default function EmployeeCard(props) {
  return (
    <Card className={styles.card} title={props.name} key={props.phone}>
      <p className={styles.phone}>{props.phone}</p>
      <p className={styles.address}>{props.address}</p>
    </Card>
  );
}
