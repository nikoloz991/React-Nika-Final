import { Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../context/ThemeContext";
import { IconButton } from "../IconButton/IconButton";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const isDark = theme === "dark";
  return (
    <IconButton
      icon={isDark ? Sun : Moon}
      label={isDark ? t("nav.switchToLight") : t("nav.switchToDark")}
      onClick={toggleTheme}
    />
  );
}
