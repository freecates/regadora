import styles from '@styles/Home.module.scss';
import api from '@libs/api.js';

import Layout from '@components/layout';

const assetsURL = `https://regadora-data.vercel.app/assets/images/`;

const Home = ({ common, routes, presentacio, perque }) => {

    const { footer, siteTitle, claim } = common;

    const { title: presentacioTitle, content: presentacioContent } = presentacio;

    const { title: perqueTitle, content: perqueContent, mainImage: perqueMainImage } = perque;

    return (
        <Layout
            title={siteTitle}
            navRoutes={routes}
            footer={footer}
            pageTitle={presentacioTitle}
            pageDescription={presentacioTitle}
            claim={claim}
        >
            <h1 className={`${styles.title} ${styles.page} ${styles.mainImageContainer} ${styles.fadeIn}`}>
                <img
                    width='2362'
                    height='1181'
                    loading='lazy'
                    alt={presentacioTitle}
                    src={`${assetsURL}${perqueMainImage}`}
                />
            </h1>
            <div className={styles.container}>
                <main className={`${styles.main} ${styles.home}`}>
                    <section className={styles.grid}>
                        <h2>{presentacioTitle}</h2>
                        <div
                            className='description'
                            dangerouslySetInnerHTML={{ __html: presentacioContent.description }}
                        />
                        <h2>{perqueTitle}</h2>
                        <div
                            className='description'
                            dangerouslySetInnerHTML={{ __html: perqueContent.description }}
                        />
                    </section>
                </main>
            </div>
        </Layout>
    );
};

export const getStaticProps = async () => {
    const [common, routes, presentacio, perque] = await Promise.all([
        api.common.getData(),
        api.routes.getData(),
        api.presentacio.getData(),
        api.perque.getData(),
    ]);
    return {
        props: {
            common: { ...common[0] },
            routes,
            presentacio: { ...presentacio[0] },
            perque: {...perque[0]},
        },
    };
};

export default Home;
