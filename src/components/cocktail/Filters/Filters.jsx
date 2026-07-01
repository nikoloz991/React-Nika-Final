import { useTranslation } from "react-i18next";
import { Select } from "../../common/Select/Select";
import styles from "./Filters.module.scss";

const GLASS_OPTIONS = [
  "Cocktail glass",
  "Highball glass",
  "Old-fashioned glass",
  "Shot glass",
  "Collins glass",
];
const ALCOHOLIC_OPTIONS = ["Alcoholic", "Non_Alcoholic", "Optional_alcohol"];

export function Filters({ categories, value, onChange }) {
  const { t } = useTranslation();
  const all = { value: "", label: t("browse.all") };
  const toOptions = (items) => [
    all,
    ...items.map((item) => ({ value: item, label: item.replace(/_/g, " ") })),
  ];

  return (
    <div className={styles.filters}>
      <Select
        id="filter-category"
        label={t("browse.category")}
        value={value.category}
        onChange={(event) => onChange({ category: event.target.value })}
        options={toOptions(categories)}
      />
      <Select
        id="filter-glass"
        label={t("browse.glass")}
        value={value.glass}
        onChange={(event) => onChange({ glass: event.target.value })}
        options={toOptions(GLASS_OPTIONS)}
      />
      <Select
        id="filter-alcoholic"
        label={t("browse.alcoholic")}
        value={value.alcoholic}
        onChange={(event) => onChange({ alcoholic: event.target.value })}
        options={toOptions(ALCOHOLIC_OPTIONS)}
      />
    </div>
  );
}
