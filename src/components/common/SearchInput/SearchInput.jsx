import { Search } from "lucide-react";
import styles from "./SearchInput.module.scss";

export function SearchInput({
  value,
  onChange,
  placeholder = "",
  label = "Search",
}) {
  return (
    <div className={styles.wrapper}>
      <Search
        className={styles.icon}
        size={18}
        strokeWidth={1.75}
        aria-hidden="true"
      />
      <input
        className={styles.input}
        type="search"
        aria-label={label}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
