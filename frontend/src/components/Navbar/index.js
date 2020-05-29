import React from "react";
import routeLinkData from "router/routeConfig";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { Menu } from "antd";

export default function Index() {
  return (
    <nav>
      <Menu theme="dark" mode="horizontal">
        {routeLinkData.map((routeData) => (
          <Menu.Item key={routeData.path}>
            <Link to={routeData.path}>{routeData.displayText}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </nav>
  );
}
