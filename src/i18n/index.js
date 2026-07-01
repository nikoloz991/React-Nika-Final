import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ka from "./locales/ka.json";

const stored = (() => {
  try {
    return JSON.parse(localStorage.getItem("cocktail-language")) || "en";
  } catch {
    return "en";
  }
})();

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, ka: { translation: ka } },
  lng: stored,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

document.documentElement.lang = i18n.language;

export default i18n;
