import styles from "./Input.module.scss";

export function Input({
  label,
  id,
  value,
  onChange,
  type = "text",
  className = "",
  ...rest
}) {
  return (
    <div className={`${styles.field} ${className}`}>
      {label ? (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      ) : null}
      <input
        id={id}
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
}
