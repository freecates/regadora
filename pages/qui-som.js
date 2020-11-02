import styles from '../styles/Home.module.scss';
import api from '../libs/api.js';
import Layout from '../components/Layout';

const Qui = ({ data }) => {
    const { title, description, content, footer, siteTitle, routes } = data;

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
                    </section>
                </main>
            </div>
        </Layout>
    );
};

export const getStaticProps = async () => {
    const [quisom, common, routes] = await Promise.all([
        api.quisom.getData(),
        api.common.getData(),
        api.routes.getData(),
    ]);
    return {
        props: {
            data: { ...quisom[0], ...common[0], routes },
        },
    };
};

export default Qui;
