import { Helmet } from "@dr.pogodin/react-helmet"; 
import { Link } from "react-router-dom";
import Section from "../components/common/Section";

const NotFound = () => {
    return (
        <div className="container u-stack">
            <Helmet><title>Page Not Found</title></Helmet>
            <Section size="lg" padding="xl" alt>
                <h1>404</h1>
                <p>We couldn't find that page.</p>
                <Link to="/" className="c-button">Return Home</Link>
            </Section>
        </div>
    );
};

export default NotFound;