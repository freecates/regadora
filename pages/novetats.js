import styles from '@styles/Home.module.scss';
import api from '@libs/api.js';
import Layout from '@components/layout';
import TwitterTimeline from '@components/twittertimeline';

const Novetats = ({ common, routes, novetats }) => {
    const { footer, siteTitle, claim } = common;

    const { title: novetatsTitle, content: novetatsContent } = novetats;

    return (
        <Layout
            title={siteTitle}
            navRoutes={routes}
            footer={footer}
            pageTitle={novetatsTitle}
            pageDescription={novetatsTitle}
            claim={claim}
        >
            
            <div className={styles.container}>
                <main className={`${styles.main} ${styles.home}`}>
                    <section className={styles.grid}>
                        <h1>{novetatsTitle}</h1>
                        <div
                            className={styles.description}
                            dangerouslySetInnerHTML={{ __html: novetatsContent.description }}
                        />

                        <TwitterTimeline id={'laregadoraSBD'} />
                    </section>
                </main>
            </div>
        </Layout>
    );
};

export const getStaticProps = async () => {
    const [common, routes, novetats] = await Promise.all([
        api.common.getData(),
        api.routes.getData(),
        api.novetats.getData(),
    ]);
    return {
        props: {
            common: { ...common[0] },
            routes,
            novetats: { ...novetats[0] },
        },
        revalidate: 1,
    };
};

export default Novetats;
