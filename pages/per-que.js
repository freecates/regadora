import styles from '@styles/Home.module.scss';
import api from '@libs/api.js';
import Image from 'next/image';
import Layout from '@components/layout';

const assetsURL = `https://regadora-data.vercel.app/assets/images/`;

const PerQue = ({ common, routes, perque }) => {

    const { footer, siteTitle, claim } = common;

    const { title: perqueTitle, content: perqueContent, mainImage: perqueMainImage } = perque;

    return (
        <Layout
            title={siteTitle}
            navRoutes={routes}
            footer={footer}
            pageTitle={perqueTitle}
            pageDescription={perqueTitle}
            claim={claim}
        >
            <h1 className={`${styles.title} ${styles.page} ${styles.mainImageContainer} ${styles.fadeIn}`}>
                <Image
                    width='2362'
                    height='1181'
                    loading='lazy'
                    alt={perqueTitle}
                    src={`${assetsURL}${perqueMainImage}`}
                />
            </h1>
            <div className={styles.container}>
                <main className={`${styles.main} ${styles.home}`}>
                    <section className={styles.grid}>
                        <h2>{perqueTitle}</h2>
                        <div
                            className={styles.description}
                            dangerouslySetInnerHTML={{ __html: perqueContent.description }}
                        />
                    </section>
                </main>
            </div>
        </Layout>
    );
};

export const getStaticProps = async () => {
    const [common, routes, perque] = await Promise.all([
        api.common.getData(),
        api.routes.getData(),
        api.perque.getData(),
    ]);
    return {
        props: {
            common: { ...common[0] },
            routes,
            perque: {...perque[0]},
        },
        revalidate: 1,
    };
};

export default PerQue;
