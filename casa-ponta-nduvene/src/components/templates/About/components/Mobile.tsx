import { state } from 'data/About';
import classNames from 'classnames';
import styles from './Mobile.module.css';

const Mobile = () => {
    const { heading, description } = state

    return (
        <section>
            <div className={classNames(styles.descriptionWrapper)}>
                <h3 className='responsive-heading-large'>{heading}</h3>
                <p dangerouslySetInnerHTML={{ __html: description }} />
            </div>
        </section>
    )
}

export default Mobile