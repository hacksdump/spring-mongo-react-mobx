import React from 'react';
import routeLinkData from "../router/routeConfig";
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <ul>
                {routeLinkData.map(
                    routeData =>
                        <li>
                            <Link to={routeData.path}>
                                {routeData.displayText}
                            </Link>
                        </li>
                )}
            </ul>
        </nav>
    );
}