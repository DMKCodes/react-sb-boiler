import { motion } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";
import "../../styles/components/_hero.scss";

const Hero = ({
    eyebrow,
    title,
    sub,
    primary,
    secondary,
    posterSrc,
    videoSrc,
    align="left",
    children,
    as: As = "div",
    contained = true
}) => {
    const reduced = usePrefersReducedMotion();

    const container = {
        hidden: { opacity: 0, y: 12 },
        show: {
            opacity: 1, 
            y: 0,
            transition: { duration: 0.38, ease: "easeOut", staggerChildren: 0.06 },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { duration: 0.28 } },
    };

    const animationContainer = reduced ? {} : container;
    const animationItem = reduced ? {} : item;

    const Action = ({ cfg, variant="primary" }) => {
        if (!cfg) return null;
        const className = variant === "primary" ? "c-button" : "c-button c-button--ghost";
        if (cfg.href) {
            const isInternal = cfg.href.startsWith("/");
            return isInternal ? (
                <a className={className} href={cfg.href}>{cfg.label}</a>
            ) : (
                <a className={className} href={cfg.href} target="_blank" rel="noreferrer">{cfg.label}</a>
            )
        }
        return (
            <button className={className} type="button" onClick={cfg.onClick}>
                {cfg.label}
            </button>
        );
    };

    return (
        <As className={`hero hero--${align} ${contained ? "hero--contained" : ""}`}>
            <div className="hero__grid">
                <motion.div
                    className="hero__content"
                    variants={animationContainer}
                    initial="hidden"
                    animate="show"
                >
                    {eyebrow && (
                        <motion.div className="hero__eyebrow" variants={animationItem}>
                            {eyebrow}
                        </motion.div>
                    )}
                    <motion.h1 className="hero__title" variants={animationItem}>{title}</motion.h1>
                    {sub && (
                        <motion.p className="hero__sub" variants={animationItem}>
                            {sub}
                        </motion.p>
                    )}

                    {children}

                    {(primary || secondary) && (
                        <motion.div className="hero__actions" variants={animationItem}>
                            <Action cfg={primary} variant="primary" />
                            <Action cfg={secondary} variant="secondary" />
                        </motion.div>
                    )}
                </motion.div>

                {posterSrc && (
                    <motion.div
                        className="hero__media"
                        variants={animationItem}
                        initial="hidden"
                        animate="show"
                    >
                        {videoSrc ? (
                            <Dialog.Root>
                                <Dialog.Trigger asChild>
                                    <button className="hero__poster" type="button" aria-label="Play video">
                                        <img src={posterSrc} alt="" />
                                        <span className="hero__play" aria-hidden="true">▶</span>
                                    </button>
                                </Dialog.Trigger>

                                <Dialog.Portal>
                                    <Dialog.Overlay className="hero-modal__overlay" />
                                    <Dialog.Content className="hero-modal__content" aria-label="Video">
                                        <Dialog.Close className="hero-modal__close" aria-label="Close">✕</Dialog.Close>

                                        {/* Sort of lazy heuristic, renders iframe if src is YouTube, else renders <video> element */}
                                        {/(youtube\.com|youtu\.be)/i.test(videoSrc) ? (
                                            <div className="hero-modal__frame">
                                                <iframe
                                                title="Hero video"
                                                src={toYoutubeEmbed(videoSrc)}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen
                                                />
                                            </div>
                                        ) : (
                                            <video
                                                className="hero-modal__video"
                                                src={videoSrc}
                                                controls
                                                playsInline
                                                preload="metadata"
                                            />
                                        )}
                                    </Dialog.Content>
                                </Dialog.Portal>
                            </Dialog.Root>
                        ) : (
                            <div className="hero__poster" aria-hidden="true">
                                <img src={posterSrc} alt="" />
                            </div>
                        )}
                    </motion.div>
                )}
            </div>
        </As>
    );
};

// Helper function converts YouTube URLs to embeds
const toYoutubeEmbed = (url) => {
    try {
        const u = new URL(url);
        if (u.hostname.includes("youtu.be")) return `https://www.youtube.com/embed/${u.pathname.slice(1)}?rel=0`
        if (u.hostname.includes("youtube.com")) {
            const id = u.searchParams.get("v");
            return `https://www.youtube.com/embed/${id}?rel=0`;
        }
    } catch {}
    return url;
}

export default Hero;