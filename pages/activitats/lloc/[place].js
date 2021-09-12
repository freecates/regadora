import Link from 'next/link';
import styles from '@styles/Home.module.scss';
import api from '@libs/api.js';
import Layout from '@components/layout';
import ActivityList from '@components/activityList';

const ActivityPlace = ({ data }) => {
    const {
        title, description, footer, siteTitle, routes, claim, activitatsDataPlace,
    } = data;

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
                    <h1>{activitatsDataPlace[0].place.name}</h1>
                    <section className={styles.grid}>
                        <ActivityList data={activitatsDataPlace} />
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

    const paths = activitatsData.map((a) => `/activitats/lloc/${a.place.slug}`);
    console.log('paths ', paths);

    return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
    const [activitats, activitatsData, common, routes] = await Promise.all([
        api.activitats.getData(),
        api.activitatsData.getData(),
        api.common.getData(),
        api.routes.getData(),
    ]);
    const activitatsDataPlace = activitatsData.filter((x) => x.place.slug === params.place);
    return {
        props: {
            data: {
                ...activitats[0],
                activitatsDataPlace,
                ...common[0],
                routes,
            },
        },
        revalidate: 1,
    };
};

export default ActivityPlace;
