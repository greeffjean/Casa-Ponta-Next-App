import { FC, useEffect, useState } from 'react';
import Image from 'next/image'
import { Slide } from 'types/generics'
import styles from './Carousel.module.css'
import { motion } from 'framer-motion'

interface CarouselProps {
    state: {
        loopTimer: number;
        slides: Slide[];
    }
}

export const Carousel: FC<CarouselProps> = ({
    state
}) => {
    const [activeIdx, setActiveIdx] = useState(0)

    useEffect(() => {
        let timer: NodeJS.Timeout
        if (activeIdx === state.slides.length) setActiveIdx(0)
        if (activeIdx !== state.slides.length) {
            timer = setTimeout(() => {
                setActiveIdx(activeIdx + 1)
            }, state.loopTimer)
        }

        return () => clearTimeout(timer)
    }, [activeIdx])


    return (
        <>
            {
                state.slides.map((image, index) => {
                    const reset = activeIdx === 0 && index !== 0
                    const isActive = activeIdx === index
                    const wasActive = activeIdx > index
                    const calcX = isActive || wasActive ? '0vw' : '-100vw'

                    return (
                        <motion.div
                            className={styles.slideWrapper}
                            key={`${image.title}-${index}`}
                            initial={{
                                x: calcX
                            }}
                            transition={{
                                duration: 0.5
                            }}
                            animate={{
                                width: '100vw',
                                height: '100vh',
                                originX: 0,
                                x: calcX,
                                zIndex: reset ? -1 : index

                            }}>
                            <motion.h2
                                initial={{
                                    opacity: 0,
                                    rotate: -25,
                                    y: -10,
                                }}
                                transition={{
                                    delay: .3,
                                    duration: .3
                                }}
                                animate={{
                                    opacity: isActive || wasActive ? 1 : 0,
                                    rotate: isActive || wasActive ? 0 : -25,
                                    y: isActive || wasActive ? 0 : -10,
                                    zIndex: index + 1
                                }}
                            >{image.title}</motion.h2>
                            <Image className={styles.slide} layout='fill' alt={image.alt} src={image.src} />
                        </motion.div>
                    )

                }
                )
            }
        </>
    )
}