import Image from 'next/image';
import styles from '@styles/Home.module.scss';
import api from '@libs/api.js';
import Layout from '@components/layout';

const assetsURL = `https://regadora-data.vercel.app/assets/images/`;

const PerQue = ({ data }) => {
    const { title, content, footer, siteTitle, routes, mainImage } = data;

    return (
        <Layout
            title={siteTitle}
            navRoutes={routes}
            footer={footer}
            pageTitle={title}
            pageDescription={title}
        >
            <h1 className={`${styles.title} ${styles.home}  ${styles.mainImageContainer}`}>
                <Image
                    width='2362'
                    height='1181'
                    loading='lazy'
                    alt={title}
                    src={`${assetsURL}${mainImage}`}
                />
            </h1>
            <div className={styles.container}>
                <main className={`${styles.main} ${styles.home}`}>
                    <h2>{title}</h2>
                    <section className={styles.grid}>
                        <div
                            className='description'
                            dangerouslySetInnerHTML={{ __html: content.description }}
                        />
                    </section>
                </main>
            </div>
        </Layout>
    );
};

export const getStaticProps = async () => {
    const [perque, common, routes] = await Promise.all([
        api.perque.getData(),
        api.common.getData(),
        api.routes.getData(),
    ]);
    return {
        props: {
            data: { ...perque[0], ...common[0], routes },
        },
    };
};

export default PerQue;
