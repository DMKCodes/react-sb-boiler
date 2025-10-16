import { Helmet } from "@dr.pogodin/react-helmet";

const Home = () => {
    return (
        <div className="container u-stack">
            <Helmet>
                <title>Home — REACT-SB-BOILER</title>
                <meta name="description" content="React boilerplate for small business projects." />
                <link rel="canonical" href="/" />
            </Helmet>

            <section className="hero">
                <h1>React SB Boilerplate</h1>
                <p>A boilerplate utility for rapidly spinning up front-end-only projects with a small business focus.</p>
                <div className="actions">
                    <a className="c-button" href="/contact">Let's talk</a>
                    <a className="c-button c-button--ghost" href="/media">See a preview</a>
                </div>
            </section>
        </div>
    );
};

export default Home;