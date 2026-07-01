import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Heart } from "lucide-react";
import { Card } from "../../common/Card/Card";
import { Tag } from "../../common/Tag/Tag";
import { IconButton } from "../../common/IconButton/IconButton";
import { useFavorites } from "../../../hooks/useFavorites";
import styles from "./CocktailCard.module.scss";

export function CocktailCard({ drink }) {
  const { t } = useTranslation();
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const favorited = isFavorite(drink.idDrink);

  const toggleFavorite = () => {
    if (favorited) {
      removeFavorite(drink.idDrink);
    } else {
      addFavorite({
        id: drink.idDrink,
        name: drink.strDrink,
        thumb: drink.strDrinkThumb,
      });
    }
  };

  return (
    <Card className={styles.card}>
      <Link to={`/drink/${drink.idDrink}`} className={styles.media}>
        <img src={drink.strDrinkThumb} alt={drink.strDrink} loading="lazy" />
      </Link>
      <div className={styles.body}>
        <h3 className={styles.name}>{drink.strDrink}</h3>
        {drink.strCategory ? <Tag>{drink.strCategory}</Tag> : null}
        <IconButton
          icon={Heart}
          label={
            favorited ? t("detail.removeFavorite") : t("detail.addFavorite")
          }
          onClick={toggleFavorite}
          className={favorited ? styles.active : ""}
        />
      </div>
    </Card>
  );
}
