import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import styles from "./LanguageToggle.module.scss";

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const [, setStored] = useLocalStorage("cocktail-language", i18n.language);

  const switchTo = i18n.language === "en" ? "ka" : "en";

  const handleClick = () => {
    i18n.changeLanguage(switchTo);
    document.documentElement.lang = switchTo;
    setStored(switchTo);
  };

  return (
    <button
      className={styles.toggle}
      onClick={handleClick}
      aria-label="Change language"
    >
      <Languages size={18} strokeWidth={1.75} aria-hidden="true" />
      <span>{switchTo.toUpperCase()}</span>
    </button>
  );
}
