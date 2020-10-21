import Link from 'next/link';

const Nav = ({title}) => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href='/'>
                        <img width='320' height='120' loading='lazy' alt={title} src='/logo.jpg' />
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
