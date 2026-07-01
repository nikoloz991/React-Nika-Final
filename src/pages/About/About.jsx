import { useTranslation } from "react-i18next";
import styles from "./About.module.scss";

const TECH = [
  "React",
  "React Router",
  "Axios",
  "SCSS Modules",
  "i18next",
  "lucide-react",
  "Vite",
];

export function About() {
  const { t } = useTranslation();
  return (
    <section className={styles.about}>
      <h1>{t("about.title")}</h1>
      <p>{t("app.tagline")}</p>
      <ul className={styles.tech}>
        {TECH.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <p className={styles.credit}>{t("about.credit")}</p>
    </section>
  );
}
