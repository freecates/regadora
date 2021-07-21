import styles from '@styles/Home.module.scss';
import api from '@libs/api.js';
import Layout from '@components/layout';
import Card from '@components/card';

const Qui = ({ data }) => {
    const {
        title, description, content, footer, siteTitle, routes, entities, files, claim,
    } = data;

    const cardData = [...entities.data];
    const cardFiles = [...files.data];

    return (
        <Layout
            title={siteTitle}
            navRoutes={routes}
            footer={footer}
            pageTitle={title}
            pageDescription={description}
            claim={claim}
        >
            <div className={styles.container}>
                <main className={styles.main}>
                    <section className={styles.grid}>
                        <Card data={cardData} files={cardFiles} />
                        <h2
                            className={styles.description}
                            dangerouslySetInnerHTML={{ __html: content.description }}
                        />
                    </section>
                </main>
            </div>
        </Layout>
    );
};

export const getStaticProps = async () => {
    const [quisom, common, routes, entities, files] = await Promise.all([
        api.quisom.getData(),
        api.common.getData(),
        api.routes.getData(),
        api.entities.getData(),
        api.files.getData(),
    ]);
    return {
        props: {
            data: {
                ...quisom[0], ...common[0], routes, entities, files,
            },
        },
        revalidate: 1,
    };
};

export default Qui;
