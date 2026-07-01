import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Heart } from "lucide-react";
import { useFetch } from "../../hooks/useFetch";
import { lookupById } from "../../api/cocktailApi";
import { IngredientList } from "../../components/cocktail/IngredientList/IngredientList";
import { Tag } from "../../components/common/Tag/Tag";
import { Button } from "../../components/common/Button/Button";
import { Spinner } from "../../components/common/Spinner/Spinner";
import { useFavorites } from "../../hooks/useFavorites";
import styles from "./Detail.module.scss";

export function Detail() {
  const { id } = useParams();
  const { t } = useTranslation();
  const fetcher = useCallback(() => lookupById(id), [id]);
  const { data: drink, loading, error, refetch } = useFetch(fetcher, [fetcher]);
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();

  if (loading) return <Spinner label={t("common.loading")} />;
  if (error)
    return (
      <div className={styles.error}>
        <p>{t("common.error")}</p>
        <Button onClick={refetch}>{t("common.retry")}</Button>
      </div>
    );
  if (!drink) return <p>{t("common.noResults")}</p>;

  const favorited = isFavorite(drink.idDrink);
  const toggleFavorite = () =>
    favorited
      ? removeFavorite(drink.idDrink)
      : addFavorite({
          id: drink.idDrink,
          name: drink.strDrink,
          thumb: drink.strDrinkThumb,
        });

  return (
    <article className={styles.detail}>
      <img
        className={styles.image}
        src={drink.strDrinkThumb}
        alt={drink.strDrink}
      />
      <div className={styles.content}>
        <h1>{drink.strDrink}</h1>
        <div className={styles.tags}>
          {drink.strCategory ? (
            <Tag tone="primary">{drink.strCategory}</Tag>
          ) : null}
          {drink.strGlass ? <Tag>{drink.strGlass}</Tag> : null}
          {drink.strAlcoholic ? <Tag>{drink.strAlcoholic}</Tag> : null}
        </div>
        <Button onClick={toggleFavorite}>
          <Heart size={16} aria-hidden="true" />{" "}
          {favorited ? t("detail.removeFavorite") : t("detail.addFavorite")}
        </Button>
        <IngredientList drink={drink} />
        <h3>{t("detail.instructions")}</h3>
        <p>{drink.strInstructions}</p>
      </div>
    </article>
  );
}
