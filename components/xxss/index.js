import { FaInstagram, FaTwitter } from 'react-icons/fa';
import styles from './XXSS.module.scss';

const XXSS = () => (
    <div className={styles.xxss}>
        <p>
            <small>Segueix-nos a</small>
        </p>
        <div>
            <a
                target='_blank'
                rel={'noopener nofollow noreferrer'}
                href='https://www.instagram.com/laregadora2021/'
                title={"Anar a l'Instagram de la Regadora"}
            >
                <span>
                    <FaInstagram />
                </span>
            </a>

            <a
                target='_blank'
                rel={'noopener nofollow noreferrer'}
                href='https://twitter.com/regadorafest'
                title={'Anar al Twitter de la Regadora'}
            >
                <span>
                    <FaTwitter />
                </span>
            </a>
        </div>
    </div>
);

export default XXSS;
