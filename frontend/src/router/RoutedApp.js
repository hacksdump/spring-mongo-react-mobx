import React from "react";

import {BrowserRouter as Router} from "react-router-dom";

import Navbar from "../components/Navbar";
import RouterView from "./RouterView";

export default function RoutedApp() {
    return (
        <Router>
            <div>
                <Navbar/>
                <RouterView/>
            </div>
        </Router>
    );
}