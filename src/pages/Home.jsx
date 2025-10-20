import { Helmet } from "@dr.pogodin/react-helmet";
import Section from "../components/common/Section";
import Hero from "../components/ui/Hero";

const Home = () => {
    return (
        <div className="container u-stack">
            <Helmet>
                <title>Home — REACT-SB-BOILER</title>
                <meta name="description" content="React boilerplate for small business projects." />
                <link rel="canonical" href="/" />
            </Helmet>

            <Section padding="xl" alt>
                <Hero
                    as="div"
                    contained={false}
                    align="left"
                    title="Spin up small business projects with ease."
                    sub="A robust, plug-and-play template for building small business applications with React."
                    primary={{ label: "Learn more", href: "/contact" }}
                    posterSrc=""
                    videoSrc=""
                />
            </Section>
        </div>
    );
};

export default Home;