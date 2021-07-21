import styles from './List.module.scss';

const List = ({ data }) => (
    <ul className={styles.list}>
        {data.map((d, index) => (
            <li key={index + d.id} className={styles.item}>
                {d.nom} {d.cognoms ? d.cognoms : null}
            </li>
        ))}
    </ul>
);
export default List;
