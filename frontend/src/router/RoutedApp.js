import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import styles from "./RoutedApp.module.scss";

import Navbar from "components/Navbar/index";
import RouterView from "./RouterView";
import Footer from "components/Footer";

import { Layout } from "antd";
import { observer } from "mobx-react";

const RoutedApp = observer((props) => {
  const store = props.store;
  return (
    <Router>
      <Layout className={styles.container}>
        <Layout.Header>
          <Navbar />
        </Layout.Header>
        <Layout.Content>
          <RouterView
            employeeProps={{
              employees: store.employees,
              fetchEmployees: store.loadEmployees,
            }}
            newEmployeeProps={{
              departments: store.departments,
              fetchDepartments: store.loadDepartments,
              createEmployee: store.createEmployee,
            }}
          />
        </Layout.Content>
        <Layout.Footer>
          <Footer />
        </Layout.Footer>
      </Layout>
    </Router>
  );
});

export default RoutedApp;
