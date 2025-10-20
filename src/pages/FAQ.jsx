import { Helmet } from "@dr.pogodin/react-helmet";
import { buildSeo, renderHelmetTags } from "../lib/seo";
import { ld, makeFAQPage } from "../lib/schema";
import { faq } from "../data/faq";

const FAQ = () => {
    const seo = buildSeo({
        title: "FAQ",
        description: "Answers to commonly asked questions.", // make more specific for real projects
        path: "/faq",
    });

    return (
        <div className="container u-stack">
            {renderHelmetTags(Helmet, seo)}
            <script type="application/ld+json">{ld(makeFAQPage(faq))}</script>

            <h1>Frequently Asked Questions</h1>
        </div>
    );
};

export default FAQ;