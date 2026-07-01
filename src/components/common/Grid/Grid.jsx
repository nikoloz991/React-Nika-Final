import styles from "./Grid.module.scss";

export function Grid({ children, min = "220px" }) {
  return (
    <div className={styles.grid} style={{ "--grid-min": min }}>
      {children}
    </div>
  );
}
