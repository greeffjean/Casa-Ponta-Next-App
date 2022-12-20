import { Slide } from "types";

interface HeroProps {
    loopTimer: number;
    slides: Slide[];
}

export const state: HeroProps = {
    loopTimer: 4000,
    slides: [
        { src: "/images/Hero/HeroImageOne.jpg", title: "Relax", alt: "" },
        { src: "/images/Hero/HeroImageTwo.jpg", title: "Unwind", alt: "" },
        { src: "/images/Hero/HeroImageThree.jpg", title: "Discover", alt: "" },
        { src: "/images/Hero/HeroImageOne.jpg", title: "Relax", alt: "" }
    ]
}