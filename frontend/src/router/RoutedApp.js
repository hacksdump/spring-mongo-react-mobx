import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import styles from "./RoutedApp.module.scss";

import Navbar from "components/Navbar/index";
import RouterView from "./RouterView";
import Footer from "components/Footer";

import { Layout } from "antd";

export default function RoutedApp() {
  return (
    <Router>
      <Layout className={styles.container}>
        <Layout.Header>
          <Navbar />
        </Layout.Header>
        <Layout.Content>
          <RouterView />
        </Layout.Content>
        <Layout.Footer>
          <Footer />
        </Layout.Footer>
      </Layout>
    </Router>
  );
}
