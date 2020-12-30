import styles from './Card.module.scss';
import Image from 'next/image';

const Card = ({ data, files }) => {
    return data.map((d, index) => (
        <div className={styles.card} key={index + d.id}>
            <h3>
                {!d.web ? (
                    d.nom
                ) : (
                    <a
                        href={d.web}
                        title={`Enllaç extern a ${d.nom}`}
                        target={'_blank'}
                        rel={'noopener'}
                        rel={'noreferrer'}
                    >
                        {d.nom}
                    </a>
                )}
            </h3>
            {d.descripcio && <p>{d.descripcio}</p>}
            {d.logo &&
                files
                    .filter((x) => x.id == d.logo)
                    .map((f) => (
                        <p className={styles.fadeIn} key={f.private_hash}>
                            <Image
                                width={f.width}
                                height={f.height}
                                loading='lazy'
                                alt={f.title}
                                src={f.data.full_url}
                                quality={75}
                            />
                        </p>
                    ))}
        </div>
    ));
};
export default Card;
