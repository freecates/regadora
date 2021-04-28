import styles from '@styles/Home.module.scss';
import api from '@libs/api.js';
import Layout from '@components/layout';
import MDFileContent from '@components/mdncontentparser';
import List from '@components/list';
import Form from '@components/form/form';

const baseUrl = process.env.BASE_URL;

const Adhesions = ({ data, mdFileContent }) => {
    const {
        title,
        subtitle,
        description,
        content,
        footer,
        siteTitle,
        routes,
        supportersData,
        claim,
    } = data;

    const listData = supportersData;

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
                        {listData && listData.length ? (
                            <>
                                <h2
                                    className={styles.description}
                                    dangerouslySetInnerHTML={{ __html: subtitle }}
                                />
                                <List data={listData} />
                            </>
                        ) : null}
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

    const res = await fetch(`${baseUrl}/manifest.md`);
    const mdFileContent = await res.text();

    const DATA = supporters.data;
    const supportersData = DATA.filter((x) => x.status === 'published');

    return {
        props: {
            data: { ...adhesions[0], ...common[0], routes, supportersData },
            mdFileContent: mdFileContent,
        },
        revalidate: 1,
    };
};

export default Adhesions;
