import styles from "./IconButton.module.scss";

export function IconButton({ icon: Icon, label, className = "", ...rest }) {
  return (
    <button
      className={`${styles.iconButton} ${className}`}
      aria-label={label}
      {...rest}
    >
      <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
    </button>
  );
}
