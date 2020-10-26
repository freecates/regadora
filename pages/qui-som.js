import Head from 'next/head';
import Nav from '../components/Nav';
import styles from '../styles/Home.module.scss';
import api from '../libs/api.js';
import Footer from '../components/Footer';

const Qui = ({ data }) => {
    const { title, description, content, footer, siteTitle, routes } = data;

    return (
        <>
            <Head>
                <title>
                    {title} | {siteTitle}
                </title>
                <meta name='description' content={`${description} | ${siteTitle}`} />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Nav title={siteTitle} navRoutes={routes} />
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1 className={styles.title}>{description}</h1>
                    <section className={styles.grid}>
                        <h2
                            className='description'
                            dangerouslySetInnerHTML={{ __html: content.description }}
                        />
                    </section>
                </main>

                <Footer footer={footer} />
            </div>
        </>
    );
};

export const getStaticProps = async () => {
    const [quisom, common, routes] = await Promise.all([
        api.quisom.getData(),
        api.common.getData(),
        api.routes.getData(),
    ]);
    return {
        props: {
            data: { ...quisom[0], ...common[0], routes },
        },
    };
};

export default Qui;
