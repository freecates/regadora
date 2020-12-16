import styles from './Card.module.scss';

const Card = ({ data }) => {
    return data.map((d, index) => (
        <div className={styles.card} key={index + d.id}>
            <h3>
                {!d.URL ? (
                    d.name
                ) : (
                    <a href={d.URL} title={`Enllaç extern a ${d.name}`} target={'_blank'}>
                        {d.name}
                    </a>
                )}
            </h3>
        </div>
    ));
};
export default Card;
