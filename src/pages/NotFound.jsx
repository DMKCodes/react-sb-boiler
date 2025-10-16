import { Helmet } from "@dr.pogodin/react-helmet";

const NotFound = () => {
    <div className="container u-stack">
        <Helmet><title>404 Page Not Found — REACT-SB-BOILER</title></Helmet>
        <h1>Error 404: Page Not Found</h1>
        <p>Page not found. Return home?</p>
    </div>
};

export default NotFound;