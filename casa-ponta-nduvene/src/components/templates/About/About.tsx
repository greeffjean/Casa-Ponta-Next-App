import { Context as AppScrollStateContext } from 'context/AppContext';
import { Context as UserDeviceContext } from 'context/UserDeviceContext';
import { FC, useContext, useRef, lazy, useEffect } from 'react';
import classNames from 'classnames';
import styles from './About.module.css';
import { sections } from 'enums/pageSections';
import { pageSectionStates } from 'enums/appStates';

const DesktopComponent = lazy(() => import('./components/Desktop'))
const MobileComponent = lazy(() => import('./components/Mobile'))

export const About: FC = () => {
    const { appScrollState } = useContext(AppScrollStateContext)
    const { isDesktop } = useContext(UserDeviceContext)
    let viewed = useRef(false)
    let rendered = useRef(false)

    useEffect(() => {
        rendered.current = true
    }, [])

    if (viewed.current === false && appScrollState.about === pageSectionStates.ACTIVE) {
        viewed.current = true
    }

    return (
        <section id={sections.ABOUT} className={classNames(styles.wrapper, 'min-100vh')}>
            {rendered.current === true && isDesktop === true ? <DesktopComponent viewed={viewed} /> : <MobileComponent />}
        </section>
    )
}