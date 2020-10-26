import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.scss';
import api from '../libs/api.js';
import Link from 'next/link';

const Home = ({ data }) => {
    const { title, description, content, footer, siteTitle, routes } = data;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={`${description}`} />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Nav title={siteTitle} navRoutes={routes} />
            <h1 className={`${styles.title} ${styles.home}`}>
                <Link href='/'>
                    <a>
                        <img
                            width='2362'
                            height='1181'
                            loading='lazy'
                            alt={title}
                            src='/tampo-color-regadora.jpg'
                        />
                    </a>
                </Link>
            </h1>
            <div className={styles.container}>
                <main className={`${styles.main} ${styles.home}`}>
                    <section className={styles.grid}>
                        <h2>{content.description}</h2>
                        <h2>{content.claim}</h2>
                    </section>
                </main>

                <Footer footer={footer} />
            </div>
        </>
    );
};

export const getStaticProps = async () => {
    const [regadora, common, routes] = await Promise.all([
        api.regadora.getData(),
        api.common.getData(),
        api.routes.getData(),
    ]);
    return {
        props: {
            data: { ...regadora[0], ...common[0], routes },
        },
    };
};

export default Home;
