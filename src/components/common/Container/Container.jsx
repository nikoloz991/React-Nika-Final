import styles from "./Container.module.scss";

export function Container({ children, className = "" }) {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
}
