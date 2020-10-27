import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Nav.module.scss';
import Image from 'next/image';

const Nav = ({ title, navRoutes }) => {
    const home = navRoutes.filter((x) => x.route === '/');
    const routes = navRoutes.filter((x) => x.route !== '/');
    const router = useRouter();

    return (
        <nav className={styles.nav}>
            <ul>
                {home.map((h, index) => (
                    <li key={index} className={router.pathname == h.route ? 'active' : ''}>
                        <Link href={h.route}>
                            <a>
                                <Image
                                    width='320'
                                    height='120'
                                    loading='lazy'
                                    alt={title}
                                    src='/logo.png'
                                />
                            </a>
                        </Link>
                    </li>
                ))}
                {routes.map((route, index) => (
                    <li
                        key={index}
                        className={`${router.pathname == route.route ? styles.active : ''}`}
                    >
                        <Link href={route.route}>{route.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
