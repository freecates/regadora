/* eslint-disable @next/next/no-img-element */
import styles from './ActivityList.module.scss';

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
                <span className={styles[d.type.id]}>{d.type.name}</span>
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
            {d.longDescription && <p>{d.longDescription}</p>}
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
                <span className={styles.pill}>{d.place.name}</span>{' '}
                <span className={styles.small}>[{d.place.address}]</span>
            </p>
        </div>
    ));
};

export default ActivityList;
