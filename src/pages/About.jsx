import { Helmet } from "@dr.pogodin/react-helmet";
import Section from "../components/common/Section";

const About = () => {
    return (
        <div className="container u-stack">
            <Helmet><title>About — REACT-SB-BOILER</title></Helmet>
            <Section size="lg" padding="xl" alt>
                <h1>About</h1>
                <p>Learn about us and our products/services.</p>
            </Section>
        </div>
    );
};

export default About;