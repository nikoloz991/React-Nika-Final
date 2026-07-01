import styles from "./Card.module.scss";

export function Card({ children, as: Tag = "div", className = "", ...rest }) {
  return (
    <Tag className={`${styles.card} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
