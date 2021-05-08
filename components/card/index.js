import styles from './Card.module.scss';

const Card = ({ data, files }) => {
    return data.map((d, index) => (
        <div className={styles.card} key={index + '-' + d.id}>
            <h3>
                {!d.web ? (
                    <span>
                        {d.nom} {d.cognoms && d.cognoms}
                    </span>
                ) : (
                    <a
                        href={d.web}
                        title={`Enllaç extern a ${d.nom}`}
                        target={'_blank'}
                        rel={'noopener'}
                        rel={'noreferrer'}
                    >
                        {d.nom}{' '}
                        <span className={styles.iconWrapper}>
                            <svg width='24' height='24' viewBox='0 0 24 24'>
                                <g fill='currentColor' fillRule='evenodd'>
                                    <path d='M12.856 5.457l-.937.92a1.002 1.002 0 0 0 0 1.437 1.047 1.047 0 0 0 1.463 0l.984-.966c.967-.95 2.542-1.135 3.602-.288a2.54 2.54 0 0 1 .203 3.81l-2.903 2.852a2.646 2.646 0 0 1-3.696 0l-1.11-1.09L9 13.57l1.108 1.089c1.822 1.788 4.802 1.788 6.622 0l2.905-2.852a4.558 4.558 0 0 0-.357-6.82c-1.893-1.517-4.695-1.226-6.422.47'></path>
                                    <path d='M11.144 19.543l.937-.92a1.002 1.002 0 0 0 0-1.437 1.047 1.047 0 0 0-1.462 0l-.985.966c-.967.95-2.542 1.135-3.602.288a2.54 2.54 0 0 1-.203-3.81l2.903-2.852a2.646 2.646 0 0 1 3.696 0l1.11 1.09L15 11.43l-1.108-1.089c-1.822-1.788-4.802-1.788-6.622 0l-2.905 2.852a4.558 4.558 0 0 0 .357 6.82c1.893 1.517 4.695 1.226 6.422-.47'></path>
                                </g>
                            </svg>
                        </span>
                    </a>
                )}
            </h3>
            {d.descripcio && <p>{d.descripcio}</p>}
            {d.logo && files ? (
                d.logo &&
                files
                    .filter((x) => x.id == d.logo)
                    .map((f) => (
                        <div className={styles.fadeIn} key={f.private_hash}>
                            <img
                                width={320}
                                height={320}
                                loading='lazy'
                                alt={f.title}
                                src={f.data.full_url}
                                quality={75}
                            />
                        </div>
                    ))
            ) : (
                <div className={styles.fadeIn}>
                    <img
                        width={320}
                        height={320}
                        loading='lazy'
                        alt={'logo regadora'}
                        src={'/logo-regadora-fallback-card.png'}
                        quality={75}
                    />
                </div>
            )}
        </div>
    ));
};
export default Card;
