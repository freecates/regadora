import styles from './Cofinance.module.scss';


const url = 'https://ca.goteo.org/project/regadora';
const name = 'Goteo: Regadora, la ciutat de les alternatives';

const Cofinance = () => (
    <div className={styles.cofinance}>
        <p>
            <small>Cofinancia el projecte</small>
        </p>
        <p>
            <a href={url} target='_blank' rel='noopener noreferrer' title={name}>
                <img width='132' height='40' alt={name} src='/goteo-white.svg' />
            </a>
        </p>
    </div>
);

export default Cofinance;
