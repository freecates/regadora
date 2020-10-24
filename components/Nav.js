import Link from 'next/link';
import styles from './Nav.module.scss';

const Nav = ({ title }) => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href='/'>
                        <a>
                            <img
                                width='320'
                                height='120'
                                loading='lazy'
                                alt={title}
                                src='/logo.png'
                            />
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/qui-som'>Qui som</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
