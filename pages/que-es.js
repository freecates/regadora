import styles from '@styles/Home.module.scss';
import api from '@libs/api.js';
import Image from 'next/image';
import Layout from '@components/layout';

const assetsURL = `https://regadora-data.vercel.app/assets/images/`;

const QueEs = ({ common, routes, presentacio }) => {

    const { footer, siteTitle, claim } = common;

    const { title: presentacioTitle, content: presentacioContent, mainImage: presentacioMainImage } = presentacio;

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
                <Image
                    width='2362'
                    height='1181'
                    loading='lazy'
                    alt={presentacioTitle}
                    src={`${assetsURL}${presentacioMainImage}`}
                />
            </h1>
            <div className={styles.container}>
                <main className={`${styles.main} ${styles.QueEs}`}>
                    <section className={styles.grid}>
                        <h2>{presentacioTitle}</h2>
                        <div
                            className='description'
                            dangerouslySetInnerHTML={{ __html: presentacioContent.description }}
                        />
                    </section>
                </main>
            </div>
        </Layout>
    );
};

export const getStaticProps = async () => {
    const [common, routes, presentacio] = await Promise.all([
        api.common.getData(),
        api.routes.getData(),
        api.presentacio.getData(),
    ]);
    return {
        props: {
            common: { ...common[0] },
            routes,
            presentacio: { ...presentacio[0] },
        },
        revalidate: 1,
    };
};

export default QueEs;
