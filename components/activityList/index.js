import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from './ActivityList.module.scss';

const CarouselNoSSR = dynamic(() => import('@components/imagecarousel'), { ssr: false });

const assetsURL = 'https://regadora-data.vercel.app/assets/images';

const ActivityTagList = () => {
    const tagList = [
        { type: { id: 'debate', name: 'Taula Rodona' } },
        { type: { id: 'talk', name: 'Xerrada' } },
        { type: { id: 'music', name: 'Música' } },
        { type: { id: 'activity', name: 'Activitat' } },
        { type: { id: 'workshop', name: 'Taller' } },
        { type: { id: 'documentary', name: '[REG] - Festival Audiovisual' } },
        { type: { id: 'exhibition', name: 'Exhibició' } },
        { type: { id: 'fair', name: 'Fira' } },
    ];
    return (
        <div className={styles.tag}>
            {tagList.map((d, index) => (
                <h3 className={styles.tag} key={`${index}-${d.id}`}>
                    <Link href={`/activitats/tipus/${d.type.id}`}>
                        <a
                            title={`Veure totes les del tipus: ${d.type.name}`}
                            className={styles[d.type.id]}
                        >
                            {d.type.name}
                        </a>
                    </Link>
                </h3>
            ))}
        </div>
    );
};

const ActivityList = ({ data }) => {
    const formatDate = (date) => {
        const options = {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
            hour: 'numeric',
            minute: 'numeric',
        };
        const dateWithFormat = new Intl.DateTimeFormat('ca-ES', options).format(new Date(date));
        return dateWithFormat;
    };
    return data.map((d, index) => (
        <div className={styles.card} key={`${index}-${d.id}`}>
            <h3>
                <Link href={`/activitats/tipus/${d.type.id}`}>
                    <a
                        title={`Veure totes les del tipus: ${d.type.name}`}
                        className={styles[d.type.id]}
                    >
                        {d.type.name}
                    </a>
                </Link>
                <span>{d.title}</span>
            </h3>
            {d.familyFriendly && (
                <span className={`${styles.pill} ${styles.pillFamily}`}>
                    Recomenada per fer-la amb criatures
                </span>
            )}
            {d.description && (
                <p>
                    <strong>{d.description}</strong>
                </p>
            )}
            {d.longDescription && <p dangerouslySetInnerHTML={{ __html: d.longDescription }} />}
            {d.type.speakers && (
                <p>
                    Amb:
                    <br />
                    {d.type.speakers.map((d, index) => (
                        <span key={`${index}-${d.name}`}>
                            <span>
                                <strong>{d.name}</strong> | {d.title}
                            </span>
                            <br />
                        </span>
                    ))}
                </p>
            )}
            {d.type.moderator && (
                <p>
                    Moderat:
                    <br />
                    <span>
                        <strong>{d.type.moderator.name}</strong>, {d.type.moderator.title}
                    </span>
                </p>
            )}
            {d.type.presenter && (
                <p>
                    Col·loqui amb / Presentació de:
                    <br />
                    <span>
                        <strong>{d.type.presenter.name}</strong>, {d.type.presenter.title}
                    </span>
                </p>
            )}
            <p>
                <strong>Data:</strong>{' '}
                {d.endDate ? (
                    <>
                        {formatDate(d.startDate)} a{' '}
                        {formatDate(d.endDate).substring(formatDate(d.endDate).indexOf(',') + 1)}{' '}
                        hores.
                    </>
                ) : (
                    <>{formatDate(d.startDate)} hores.</>
                )}{' '}
                <br />
                <Link href={`/activitats/lloc/${d.place.slug}`}>
                    <a>
                        <span className={styles.pill}>{d.place.name}</span>
                    </a>
                </Link>{' '}
                <span className={styles.small}>[{d.place.address}]</span>
            </p>
            {d.images && (
                <CarouselNoSSR images={d.images} height={1008} width={756} assetsURL={assetsURL} />
            )}
        </div>
    ));
};

export default ActivityList;
export { ActivityTagList };
