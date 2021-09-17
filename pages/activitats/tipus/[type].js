import Link from 'next/link';
import styles from '@styles/Home.module.scss';
import api from '@libs/api.js';
import Layout from '@components/layout';
import ActivityList from '@components/activityList';

const ActivityType = ({ data }) => {
    const {
        title, description, footer, siteTitle, routes, claim, activitatsDataType,
    } = data;

    const fullTitle = `${title}, ${activitatsDataType[0].type.name}`;
    const fullDescription = `${description} (${activitatsDataType[0].type.name})`;

    return (
        <Layout
            title={siteTitle}
            navRoutes={routes}
            footer={footer}
            pageTitle={fullTitle}
            pageDescription={fullDescription}
            claim={claim}
        >
            <div className={styles.container}>
                <main className={styles.main}>
                    <p>
                        <Link href={'/activitats'}>
                            <a>
                                <strong>[veure totes les activitats]</strong>
                            </a>
                        </Link>
                    </p>
                    <h1>{activitatsDataType[0].type.name}</h1>
                    <section className={styles.grid}>
                        <ActivityList data={activitatsDataType} />
                    </section>
                    <p>
                        <Link href={'/activitats'}>
                            <a>
                                <strong>[veure totes les activitats]</strong>
                            </a>
                        </Link>
                    </p>
                </main>
            </div>
        </Layout>
    );
};

export const getStaticPaths = async () => {
    const [activitatsData] = await Promise.all([api.activitatsData.getData()]);

    const paths = activitatsData.map((a) => `/activitats/tipus/${a.type.id}`);

    return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
    const [activitats, activitatsData, common, routes] = await Promise.all([
        api.activitats.getData(),
        api.activitatsData.getData(),
        api.common.getData(),
        api.routes.getData(),
    ]);
    const activitatsDataType = activitatsData.filter((x) => x.type.id === params.type);
    return {
        props: {
            data: {
                ...activitats[0],
                activitatsDataType,
                ...common[0],
                routes,
            },
        },
        revalidate: 1,
    };
};

export default ActivityType;
