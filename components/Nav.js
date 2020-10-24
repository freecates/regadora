import Link from 'next/link';
import { useRouter } from "next/router";
import styles from './Nav.module.scss';

const Nav = ({ title }) => {

    const router = useRouter();
    return (
        <nav className={styles.nav}>
            <ul>
                <li className={router.pathname == "/" ? "active" : ""}>
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
                <li className={`${router.pathname == '/qui-som' ? styles.active : ''}`}>
                    <Link href='/qui-som'>Qui som</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
