import styles from './Hero.module.css'
import { Carousel } from '../Carousel/Carousel'

interface Slide {
    src: string,
    title: string,
    alt: string
}
interface HeroState {
    loopTimer: number;
    slides: Slide[];
}

export const Hero = () => {

    const state: HeroState = {
        loopTimer: 4000,
        slides: [
            { src: "/images/Hero/HeroImageOne.jpg", title: "Relax", alt: "" },
            { src: "/images/Hero/HeroImageTwo.jpg", title: "Unwind", alt: "" },
            { src: "/images/Hero/HeroImageThree.jpg", title: "Discover", alt: "" },
            { src: "/images/Hero/HeroImageOne.jpg", title: "Relax", alt: "" },
        ]
    }

    return (
        <section className={styles.heroWrapper}>
            <Carousel state={state} />
        </section >
    )
}