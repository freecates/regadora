import styles from '@styles/Home.module.scss';
import api from '@libs/api.js';
import Layout from '@components/layout';
import VimeoPlayer from '@components/vimeoplayer';

const QueEs = ({ common, routes, presentacio }) => {
    const { footer, siteTitle, claim } = common;

    const {
        title: presentacioTitle,
        content: presentacioContent,
    } = presentacio;

    return (
        <Layout
            title={siteTitle}
            navRoutes={routes}
            footer={footer}
            pageTitle={presentacioTitle}
            pageDescription={presentacioTitle}
            claim={claim}
        >
            <h1
                className={`${styles.title} ${styles.page} ${styles.mainImageContainer} ${styles.fadeIn}`}
            >
                <VimeoPlayer
                    src='https://player.vimeo.com/video/542095976?color=8fbeae'
                    width='2048'
                    height='1152'
                    allow='autoplay; fullscreen; picture-in-picture'
                    allowfullscreen
                />
            </h1>
            <div className={styles.container}>
                <main className={`${styles.main} ${styles.home}`}>
                    <section className={styles.grid}>
                        <h2>{presentacioTitle}</h2>
                        <div
                            className={styles.description}
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
