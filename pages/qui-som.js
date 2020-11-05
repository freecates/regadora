import styles from '../styles/Home.module.scss';
import api from '../libs/api.js';
import Layout from '../components/Layout';
import Card from '../components/Card';

const Qui = ({ data }) => {
    const { title, description, content, footer, siteTitle, routes, entities } = data;

    return (
        <Layout
            title={siteTitle}
            navRoutes={routes}
            footer={footer}
            pageTitle={title}
            pageDescription={description}
        >
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1 className={styles.title}>{description}</h1>
                    <section className={styles.grid}>
                        <h2
                            className='description'
                            dangerouslySetInnerHTML={{ __html: content.description }}
                        />
                        <Card data={entities} />
                    </section>
                </main>
            </div>
        </Layout>
    );
};

export const getStaticProps = async () => {
    const [quisom, common, routes, entities] = await Promise.all([
        api.quisom.getData(),
        api.common.getData(),
        api.routes.getData(),
        api.entities.getData(),
    ]);
    return {
        props: {
            data: { ...quisom[0], ...common[0], routes, entities },
        },
        revalidate: 1,
    };
};

export default Qui;
