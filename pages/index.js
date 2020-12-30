import styles from '@styles/Home.module.scss';
import api from '@libs/api.js';
import Layout from '@components/layout';

const assetsURL = `https://regadora-data.vercel.app/assets/images/`;

const Home = ({ regadora, common, routes }) => {
    const {
        title: regadoraTitle,
        description: regadoraDescription,
        content: regadoraContent,
        where, when, claim
    } = regadora;

    const { footer, siteTitle } = common;

    return (
        <Layout
            title={siteTitle}
            navRoutes={routes}
            footer={footer}
            pageTitle={regadoraTitle}
            pageDescription={regadoraDescription}
            home
        >
            <h1 className={`${styles.title} ${styles.home} ${styles.background} ${styles.mainImageContainer}`}>{regadoraTitle}
                <br/><small>{claim}</small>
            </h1>
            <div className={styles.container}>
                <main className={`${styles.main} ${styles.home}`}>
                    <section className={styles.grid}>
                        <h2
                            dangerouslySetInnerHTML={{ __html: regadoraContent.description }}
                        />
                        <h2>{regadoraContent.claim}</h2>
                        <p className={styles.description}>{where} | {when}</p>
                    </section>
                </main>
            </div>
        </Layout>
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
            regadora: { ...regadora[0] },
            common: { ...common[0] },
            routes,
        },
    };
};

export default Home;
