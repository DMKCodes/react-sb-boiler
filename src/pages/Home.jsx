import { Helmet } from "@dr.pogodin/react-helmet";
import { buildSeo, renderHelmetTags } from "../lib/seo";
import { ld, makeOrganization } from "../lib/schema";
import Section from "../components/common/Section";
import Hero from "../components/ui/Hero";

const Home = () => {
    const seo = buildSeo({
        title: "PROJECT TITLE",
        description: "Project description, typically 30-60 chars.",
        path: "/",
        image: "/assets/example.jpg",
    });

    return (
        <div className="container u-stack">
            {renderHelmetTags(Helmet, seo)}
            <script type="application/ld+json">{ld(makeOrganization())}</script>

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