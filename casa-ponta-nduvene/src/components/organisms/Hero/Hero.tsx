import styles from './Hero.module.css'
import { Carousel } from '../Carousel/Carousel'
import { Suspense } from 'react';
import { Loader } from 'components/atoms';
import { state } from 'data/Hero';

export const Hero = () => {
    return (
        <section className={styles.heroWrapper}>
            <Suspense fallback={<Loader />}>
                <Carousel state={state} />
            </Suspense>
        </section >
    )
}