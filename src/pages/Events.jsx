import { Helmet } from "@dr.pogodin/react-helmet";
import Section from "../components/common/Section";

const Events = () => {
    return (
        <div className="container u-stack">
            <Helmet><title>Events — REACT-SB-BOILER</title></Helmet>
            <Section size="lg" padding="xl" alt>
                <h1>Events Calendar</h1>
                <p>See our upcoming events.</p>
            </Section>
        </div>
    );
};

export default Events;