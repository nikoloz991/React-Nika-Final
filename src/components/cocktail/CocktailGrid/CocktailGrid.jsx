import { useTranslation } from "react-i18next";
import { Grid } from "../../common/Grid/Grid";
import { Skeleton } from "../../common/Skeleton/Skeleton";
import { CocktailCard } from "../CocktailCard/CocktailCard";
import styles from "./CocktailGrid.module.scss";

export function CocktailGrid({ drinks, loading, emptyMessage }) {
  const { t } = useTranslation();

  if (loading) {
    return (
      <Grid>
        {Array.from({ length: 8 }).map((_, index) => (
          <Skeleton key={index} height="280px" radius="8px" />
        ))}
      </Grid>
    );
  }

  if (!drinks || drinks.length === 0) {
    return (
      <p className={styles.empty}>{emptyMessage ?? t("common.noResults")}</p>
    );
  }

  return (
    <Grid>
      {drinks.map((drink) => (
        <CocktailCard key={drink.idDrink} drink={drink} />
      ))}
    </Grid>
  );
}
