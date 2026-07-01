import { useTranslation } from "react-i18next";
import { parseIngredients } from "../../../utils/parseIngredients";
import styles from "./IngredientList.module.scss";

export function IngredientList({ drink }) {
  const { t } = useTranslation();
  const items = parseIngredients(drink);

  return (
    <div>
      <h3>{t("detail.ingredients")}</h3>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.ingredient} className={styles.item}>
            <span>{item.ingredient}</span>
            <span className={styles.measure}>{item.measure}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
