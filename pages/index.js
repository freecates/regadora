import styles from '@styles/Home.module.scss';
import Image from 'next/image';
import api from '@libs/api.js';
import Layout from '@components/layout';
import Button from '@components/button';
import dynamic from 'next/dynamic';

const assetsURL = 'https://regadora-data.vercel.app/assets/images';

const CarouselNoSSR = dynamic(
    () => import('@components/imagecarousel'),
    { ssr: false },
);

const Home = ({
    regadora, common, routes, carouselImages,
}) => {
    const {
        title: regadoraTitle,
        description: regadoraDescription,
        content: regadoraContent,
        where,
        when,
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
                    src={'/capcalera-web-mobile-regadora.jpg'}
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
                    src={'/capcalera-web-regadora.jpg'}
                />
            </h1>
            <div className={`${styles.carouselWrapper}`}>
                <CarouselNoSSR
                    images={carouselImages}
                    height={1365}
                    width={2048}
                    assetsURL={assetsURL}
                />
            </div>
            <div className={styles.container}>
                <main className={`${styles.main} ${styles.home}`}>
                    <section className={styles.grid}>
                        <h2 dangerouslySetInnerHTML={{ __html: regadoraContent.description }} />
                        <h2>{regadoraContent.claim}</h2>
                        <p className={`${styles.description} ${styles.center}`}>
                            {where} | {when}
                        </p>
                        <div className={styles.wrapper}>
                            <Button name={'adhesions'} type={'anchor'} url={'/manifest'} />
                        </div>
                    </section>
                </main>
            </div>
        </Layout>
    );
};

export const getStaticProps = async () => {
    const [regadora, common, routes, carouselImages] = await Promise.all([
        api.regadora.getData(),
        api.common.getData(),
        api.routes.getData(),
        api.carouselImages.getData(),
    ]);
    return {
        props: {
            regadora: { ...regadora[0] },
            common: { ...common[0] },
            routes,
            carouselImages,
        },
        revalidate: 1,
    };
};

export default Home;
