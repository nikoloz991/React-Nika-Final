import { useTranslation } from "react-i18next";
import { Container } from "../../common/Container/Container";
import styles from "./Footer.module.scss";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <Container>
        <p>
          {t("app.name")} · {t("about.credit")}
        </p>
      </Container>
    </footer>
  );
}
