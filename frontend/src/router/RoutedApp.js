import React, { useState } from "react";

import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "../components/Navbar";
import RouterView from "./RouterView";

export default function RoutedApp() {
  return (
    <Router>
      <Navbar />
      <RouterView />
    </Router>
  );
}
