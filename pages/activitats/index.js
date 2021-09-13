import styles from '@styles/Home.module.scss';
import api from '@libs/api.js';
import Layout from '@components/layout';
import ActivityList, { ActivityTagList } from '@components/activityList';

const Activitats = ({ data }) => {
    const {
        title,
        description,
        footer,
        siteTitle,
        routes,
        claim,
        fridayActivities,
        saturdayActivities,
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
                    <p>
                        <a download href={'/programa-regadora-2021.pdf'}>
                            <strong>[Programa en PDF]</strong>
                        </a>
                    </p>
                    <section>
                        <ActivityTagList />
                    </section>
                    <h1>Divendres</h1>
                    <section className={styles.grid}>
                        <ActivityList data={fridayActivities} />
                    </section>
                    <h1>Dissabte</h1>
                    <section className={styles.grid}>
                        <ActivityList data={saturdayActivities} />
                    </section>
                    <section>
                        <ActivityTagList />
                    </section>
                    <p>
                        <a download href={'/programa-regadora-2021.pdf'}>
                            <strong>[Programa en PDF]</strong>
                        </a>
                    </p>
                </main>
            </div>
        </Layout>
    );
};

export const getStaticProps = async () => {
    const [activitats, activitatsData, common, routes] = await Promise.all([
        api.activitats.getData(),
        api.activitatsData.getData(),
        api.common.getData(),
        api.routes.getData(),
    ]);
    const fridayActivities = activitatsData.filter((x) => x.startDate.includes('2021-09-17'));
    const saturdayActivities = activitatsData.filter((x) => x.startDate.includes('2021-09-18'));
    return {
        props: {
            data: {
                ...activitats[0],
                fridayActivities,
                saturdayActivities,
                ...common[0],
                routes,
            },
        },
        revalidate: 1,
    };
};

export default Activitats;
