import styles from './Button.module.scss';

const Button = ({ name, type, url }) => {
    return (
        <div className={styles.button}>
            {type === 'anchor' ? <a href={url}>
                {name}
            </a> :
                <button name={name} type={type}>{name}</button>
            }
        </div>
    )
}

export default Button;