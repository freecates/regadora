import styles from './Cofinance.module.scss';
import Image from 'next/image';

const url = 'https://ca.goteo.org/project/regadora';
const name = 'Goteo: Regadora, la ciutat de les alternatives';

const Cofinance = () => (
    <div className={styles.cofinance}>
        <p>
            <small>Cofinancia el projecte</small>
        </p>
        <div>
            <a href={url} target='_blank' rel='noopener noreferrer' title={name}>
                <Image width='132' height='40' alt={name} src='/goteo-white.svg' />
            </a>
        </div>
    </div>
);

export default Cofinance;
