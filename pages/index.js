import styles from '@styles/Home.module.scss';
import api from '@libs/api.js';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@components/layout';

const assetsURL = `https://regadora-data.vercel.app/assets/images/`;

const Home = ({ regadora, common, routes, presentacio }) => {
    const {
        title: regadoraTitle,
        description: regadoraDescription,
        content: regadoraContent,
    } = regadora;

    const { footer, siteTitle } = common;

    const { title: presentacioTitle, content: presentacioContent, mainImage } = presentacio;

    return (
        <Layout
            title={siteTitle}
            navRoutes={routes}
            footer={footer}
            pageTitle={regadoraTitle}
            pageDescription={regadoraDescription}
            home
        >
            <h1 className={`${styles.title} ${styles.home} ${styles.mainImageContainer} ${styles.fadeIn}`}>
                <Link href='/'>
                    <a>
                        <Image
                            width='2362'
                            height='1181'
                            loading='lazy'
                            alt={presentacioTitle}
                            src='/tampo-color-regadora.jpg'
                        />
                    </a>
                </Link>
            </h1>
            <div className={styles.container}>
                <main className={`${styles.main} ${styles.home}`}>
                    <section className={styles.grid}>
                        <h2
                            className='description'
                            dangerouslySetInnerHTML={{ __html: regadoraContent.description }}
                        />
                        <h2>{regadoraContent.claim}</h2>
                    </section>
                </main>
            </div>
            <h1 className={`${styles.title} ${styles.home} ${styles.mainImageContainer} ${styles.fadeIn}`}>
                <Image
                    width='2362'
                    height='1181'
                    loading='lazy'
                    alt={regadoraTitle}
                    src={`${assetsURL}${mainImage}`}
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
                    </section>
                </main>
            </div>
        </Layout>
    );
};

export const getStaticProps = async () => {
    const [regadora, common, routes, presentacio] = await Promise.all([
        api.regadora.getData(),
        api.common.getData(),
        api.routes.getData(),
        api.presentacio.getData(),
    ]);
    return {
        props: {
            regadora: { ...regadora[0] },
            common: { ...common[0] },
            routes,
            presentacio: { ...presentacio[0] },
        },
    };
};

export default Home;
