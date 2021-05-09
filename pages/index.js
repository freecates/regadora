import styles from '@styles/Home.module.scss';
import Image from 'next/image';
import api from '@libs/api.js';
import Layout from '@components/layout';
import Button from '@components/button';

const assetsURL = `https://regadora-data.vercel.app/assets/images/`;

const Home = ({ regadora, common, routes }) => {
    const {
        title: regadoraTitle,
        description: regadoraDescription,
        content: regadoraContent,
        where,
        when,
        claim,
    } = regadora;

    const { footer, siteTitle, claim: SocialNetworkClaim } = common;

    return (
        <Layout
            title={siteTitle}
            navRoutes={routes}
            footer={footer}
            pageTitle={regadoraTitle}
            pageDescription={regadoraDescription}
            claim={SocialNetworkClaim}
            home
        >
            <h1
                className={`${styles.title} ${styles.page} ${styles.mainImageContainer} ${styles.fadeIn} ${styles.isMobile} ${styles.background}`}
            >
                <Image
                    width='320'
                    height='480'
                    loading='lazy'
                    alt={'Camviem el sistema no el clima. Sabadell ciutat de les alternative'}
                    src={`/capcalera-web-mobile-regadora.jpg`}
                />
            </h1>
            <h1
                className={`${styles.title} ${styles.page} ${styles.mainImageContainer} ${styles.fadeIn} ${styles.isDesktop} ${styles.background}`}
            >
                <Image
                    width='1680'
                    height='230'
                    loading='lazy'
                    alt={'Camviem el sistema no el clima. Sabadell ciutat de les alternative'}
                    src={`/capcalera-web-regadora.jpg`}
                />
            </h1>
            <div className={styles.container}>
                <main className={`${styles.main} ${styles.home}`}>
                    <section className={styles.grid}>
                        <h2 dangerouslySetInnerHTML={{ __html: regadoraContent.description }} />
                        <h2>{regadoraContent.claim}</h2>
                        <p className={styles.description}>
                            {where} | {when}
                        </p>
                        <div className={styles.wrapper}>
                            <Button name={'adhesions'} type={'anchor'} url={'/adhesions'} />
                        </div>
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
        revalidate: 1,
    };
};

export default Home;
