import { Helmet } from "@dr.pogodin/react-helmet"; 
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="container u-stack">
            <Helmet><title>Page Not Found</title></Helmet>
            <h1>404</h1>
            <p>We couldn't find that page.</p>
            <Link to="/" className="c-button">Return Home</Link>
        </div>
    );
};

export default NotFound;