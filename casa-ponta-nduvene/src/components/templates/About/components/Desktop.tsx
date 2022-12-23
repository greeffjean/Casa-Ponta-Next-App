import { state } from 'data/About';
import classNames from 'classnames';
import styles from './Desktop.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FC } from 'react';

interface DesktopProps {
    viewed: {
        current: boolean
    }
}

const Desktop: FC<DesktopProps> = ({ viewed }) => {
    const { heading, description } = state

    return (
        <section>
            <motion.div
                className={styles.imageWrapper}
                transition={{
                    duration: 1.5
                }}
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: viewed.current === true ? 1 : 0,
                    x: viewed.current === true ? 0 : -300
                }}
            >
                <Image layout='fill' alt={state.alt} src={state.wallpaper} />
            </motion.div>

            <div className={classNames(styles.descriptionWrapper)}>

                <div className={styles.headingWrapperLeft}>
                    <h3 className='responsive-heading-large'>{heading[0]}</h3>
                </div>

                <div className={styles.headingWrapperRight}>
                    <h3 className='responsive-heading-large'>{heading.slice(1, heading.length)}</h3>
                    <p dangerouslySetInnerHTML={{ __html: description }} />
                </div>

            </div>
        </section>
    )
}

export default Desktop