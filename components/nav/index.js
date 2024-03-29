import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from './Nav.module.scss';

const Nav = ({ title, navRoutes }) => {
    const home = navRoutes.filter((x) => x.route === '/');
    const routes = navRoutes.filter((x) => x.route !== '/');
    const router = useRouter();

    return (
        <nav className={styles.nav}>
            <ul className={styles.main}>
                {home.map((h, index) => (
                    <li key={index} className={router.pathname === h.route ? 'active' : ''}>
                        <Link href={h.route}>
                            <a>
                                <Image
                                    width='320'
                                    height='120'
                                    alt={title}
                                    src='/logo.png'
                                    quality='100'
                                />
                            </a>
                        </Link>
                    </li>
                ))}
                <li>
                    <ul className={styles.secondary}>
                        {routes.map((route, index) => (
                            <li
                                key={index}
                                className={`${router.pathname === route.route ? styles.active : ''}`}
                            >
                                <Link href={route.route}>{route.name}</Link>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
