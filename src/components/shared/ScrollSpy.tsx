'use client'

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const sections = ["home", "education", "experience", "project", "skill", "language", "certificate"];

export const ScrollSpy = () => {
    const pathname = usePathname();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    // Update the URL hash without reloading
                    window.history.replaceState(null, "", `${pathname}#${id}`);
                }
                });
            },
            { threshold: 0.5 } // trigger when 50% of section is visible
        );

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [pathname]);

    return null;
}
