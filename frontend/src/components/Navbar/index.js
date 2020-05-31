import React from "react";
import routeLinkData from "router/routeConfig";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "antd";

function routeToKey(route) {
  return routeLinkData.find((item) => item.path == route).key;
}

export default function Navbar(props) {
  return (
    <nav>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={routeToKey(useLocation().pathname)}
      >
        {routeLinkData.map((routeData) => (
          <Menu.Item key={routeData.key}>
            <Link to={routeData.path}>{routeData.displayText}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </nav>
  );
}
