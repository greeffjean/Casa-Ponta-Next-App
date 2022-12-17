import styles from './Hero.module.css'
import { Carousel } from '../Carousel/Carousel'
import { Slide } from 'types/generics'

interface HeroProps {
    loopTimer: number;
    slides: Slide[];
}

const state: HeroProps = {
    loopTimer: 4000,
    slides: [
        { src: "/images/Hero/HeroImageOne.jpg", title: "Relax", alt: "" },
        { src: "/images/Hero/HeroImageTwo.jpg", title: "Unwind", alt: "" },
        { src: "/images/Hero/HeroImageThree.jpg", title: "Discover", alt: "" },
        { src: "/images/Hero/HeroImageOne.jpg", title: "Relax", alt: "" },
    ]
}

export const Hero = () => {
    return (
        <section className={styles.heroWrapper}>
            <Carousel state={state} />
        </section >
    )
}