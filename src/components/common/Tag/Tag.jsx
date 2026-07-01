import styles from "./Tag.module.scss";

export function Tag({ children, tone = "accent" }) {
  return <span className={`${styles.tag} ${styles[tone]}`}>{children}</span>;
}
