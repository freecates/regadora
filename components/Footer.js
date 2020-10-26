import styles from './Footer.module.scss';

const Footer = ({ footer }) => (
    <footer className={styles.footer}>
        <a href={footer.xess.url} target='_blank' rel='noopener noreferrer'>
            {footer.xess.name}
        </a>
    </footer>
);

export default Footer;


