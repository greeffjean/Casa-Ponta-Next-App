import { Context } from "context/AppContext";
import { AppScrollStateProps } from "context/types";
import { pageSectionStates } from "enums/appStates";
import { sections } from "enums/pageSections";
import { useContext, useEffect } from "react";

const elements = [
    `#${sections.HERO}`,
    `#${sections.ABOUT}`,
    `#${sections.GALLERY}`,
    `#${sections.REVIEWS}`,
    `#${sections.CONTACT}`
]

const options = {
    root: null,
    threshold: 0,
};

export const UseAppScrollState = () => {
    const { appScrollState, setAppScrollState } = useContext(Context)

    useEffect(() => {
        let callback = (entries: any[], observer: any) => {
            entries.forEach((entry) => {
                const key = entry.target.id;
                const state = entry.isIntersecting ? pageSectionStates.ACTIVE : pageSectionStates.IDLE;
                setAppScrollState({ ...appScrollState, [key]: state } as AppScrollStateProps);
            });
        };

        let targets = document.querySelectorAll(elements.join(','));
        let observer = new IntersectionObserver(callback, options);

        targets.forEach((target) => {
            observer.observe(target);
        });
    }, []);

    return null
};
