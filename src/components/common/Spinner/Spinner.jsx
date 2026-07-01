import styles from "./Spinner.module.scss";

export function Spinner({ label = "Loading" }) {
  return <span className={styles.spinner} role="status" aria-label={label} />;
}
