import styles from './Hero.module.css'
import { Carousel } from '../Carousel/Carousel'
import { Suspense } from 'react';
import { Loader } from 'components/atoms';
import { state } from 'data/Hero';
import { sections } from 'enums/pageSections';

export const Hero = () => {
    return (
        <section id={sections.HERO} className={styles.heroWrapper}>
            <Suspense fallback={<Loader />}>
                <Carousel state={state} />
            </Suspense>
        </section >
    )
};