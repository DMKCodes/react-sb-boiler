import React from "react";

const Home      = React.lazy(() => import("../pages/Home.jsx"));
const About     = React.lazy(() => import("../pages/About.jsx"));
const Media     = React.lazy(() => import("../pages/Media.jsx"));
const Events    = React.lazy(() => import("../pages/Events.jsx"));
const Contact   = React.lazy(() => import("../pages/Contact.jsx"));
const NotFound  = React.lazy(() => import("../pages/NotFound.jsx"));

const routes = [
    { path: "/", Component: Home },
    { path: "/", Component: About },
    { path: "/", Component: Media },
    { path: "/", Component: Events },
    { path: "/", Component: Contact },
    { path: "/", Component: NotFound },
];

export default routes;