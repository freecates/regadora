import styles from '@styles/Home.module.scss';
import api from '@libs/api.js';
import Layout from '@components/layout';
import MDFileContent from '@components/mdncontentparser';
import List from '@components/list';
import Form from '@components/form/form';

const baseUrl = process.env.BASE_URL;

const Manifest = ({ data, mdFileContent }) => {
    const {
        title,
        subtitle,
        description,
        content,
        footer,
        siteTitle,
        routes,
        supportersData,
        supportersDataEntities,
        claim,
    } = data;

    const listData = supportersData;
    const listDataEntities = supportersDataEntities;

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
                        <div className={styles.wrapper}>
                            <h1 className={`${styles.title} ${styles.page}`}>Manifest</h1>
                            <MDFileContent content={mdFileContent} />
                            <p
                                id={'form'}
                                className={styles.description}
                                dangerouslySetInnerHTML={{ __html: content.description }}
                            />
                            <Form />
                        </div>
                        <div>
                            <h2
                                className={styles.description}
                                dangerouslySetInnerHTML={{ __html: subtitle }}
                            />
                            {listData && listData.length ? (
                                <>
                                    <h3>Particulars</h3>
                                    <List data={listData} />
                                </>
                            ) : null}
                            {listDataEntities && listDataEntities.length ? (
                                <>
                                    <h3>Entitats</h3>
                                    <List data={listDataEntities} />
                                </>
                            ) : null}
                        </div>
                    </section>
                </main>
            </div>
        </Layout>
    );
};

export const getStaticProps = async () => {
    const [adhesions, common, routes, supporters] = await Promise.all([
        api.adhesions.getData(),
        api.common.getData(),
        api.routes.getData(),
        api.supporters.getData(),
    ]);

    // eslint-disable-next-line no-undef
    const res = await fetch(`${baseUrl}/manifest.md`);
    const mdFileContent = await res.text();

    const DATA = supporters.data;
    const supportersData = DATA.filter((x) => x.es_entitat === false);
    const supportersDataEntities = DATA.filter((x) => x.es_entitat === true);

    return {
        props: {
            data: {
                ...adhesions[0], ...common[0], routes, supportersData, supportersDataEntities,
            },
            mdFileContent,
        },
        revalidate: 1,
    };
};

export default Manifest;
