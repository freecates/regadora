import styles from './Input.module.scss';

const Input = ({
    id,
    name,
    type,
    autoComplete,
    required,
    placeholder,
    pattern,
    title,
    onClick,
}) => (
    <div className={styles.input}>
        <label htmlFor={id}>{name}</label>
        <input
            id={id}
            name={name}
            type={type}
            autoComplete={autoComplete}
            required={required}
            placeholder={placeholder}
            pattern={pattern}
            title={title}
            onClick={() => onClick && onClick()}
        />
    </div>
);
export default Input;
