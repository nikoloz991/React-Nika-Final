import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./NotFound.module.scss";

export function NotFound() {
  const { t } = useTranslation();
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <p>{t("common.noResults")}</p>
      <Link to="/">{t("nav.home")}</Link>
    </div>
  );
}
