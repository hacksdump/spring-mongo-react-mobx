import Home from './route-components/Home';
import Users from "./route-components/Users";

const routeLinkData = [
    {
        path: "/",
        displayText: "Home",
        component: Home,
        exact: true,
    },
    {
        path: "/users",
        displayText: "Users",
        component: Users,
    },
];

export default routeLinkData;