import { useEffect, useState } from 'react';

const usePrefersReducedMotion = () => {
    const [reduced, setReduced] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined" || !window.matchMedia) return;
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        const apply = () => setReduced(!!mq.matches);
        apply();
        mq.addEventListener?.("change", apply);
        return () => mq.removeEventListener?.("change", apply);
    }, []);

    return reduced;
};

export default usePrefersReducedMotion;