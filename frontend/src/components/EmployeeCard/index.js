import styles from "./EmployeeCard.module.scss";
import { Card, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React from "react";

export default function EmployeeCard(props) {
  console.log(props);
  return (
    <Card className={styles.card} title={props.name} key={props.phone}>
      <div className={styles.iconNameContainer}>
        <div>
          <Avatar
            size="large"
            icon={<UserOutlined />}
            className={
              props.gender === "MALE"
                ? styles.male
                : props.gender === "FEMALE"
                ? styles.female
                : null
            }
          />
        </div>
        <div className={styles.primeData}>
          <p className={styles.phone}>{props.phone}</p>
          <p className={styles.email}>{props.email}</p>
        </div>
      </div>
      <div className={styles.footer}>
        <p className={styles.department}>{props.department.name}</p>
        <p className={styles.address}>{newLineToDivBlocks(props.address)}</p>
      </div>
    </Card>
  );
}

function newLineToDivBlocks(stringWithNewLineChars) {
  return stringWithNewLineChars
    .split("\n")
    .map((line, idx) => <div key={idx}>{line}</div>);
}
