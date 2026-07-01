import styles from "./Skeleton.module.scss";

export function Skeleton({ width = "100%", height = "1rem", radius = "8px" }) {
  return (
    <span
      className={styles.skeleton}
      style={{ width, height, borderRadius: radius }}
      aria-hidden="true"
    />
  );
}
