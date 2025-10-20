import { Helmet } from "@dr.pogodin/react-helmet";
import Section from "../components/common/Section";
import TestimonialList from "../components/modules/TestimonialList";

const Media = () => {
    return (
        <div className="container u-stack">
            <Helmet><title>Media — REACT-SB-BOILER</title></Helmet>
            <Section size="lg" padding="xl" alt>
                <h1>Media</h1>
                <p>Read customer testimonials or reviews.</p>
                <TestimonialList />
            </Section>
        </div>
    );
};

export default Media;