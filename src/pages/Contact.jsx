import { Helmet } from "@dr.pogodin/react-helmet";
import Section from "../components/common/Section";
import ContactForm from "../components/forms/ContactForm";

const Contact = () => {
    return (
        <div className="container u-stack">
            <Helmet><title>Contact — REACT-SB-BOILER</title></Helmet>

            <Section size="sm" padding="xl" alt>
                <h1>Contact</h1>
                <p>Get in touch to see how we can help.</p>
                <ContactForm action="https://formspree.io/f/yourIdHere" />
            </Section>
        </div>
    );
};

export default Contact;