import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useFavorites } from "../../hooks/useFavorites";
import { CocktailGrid } from "../../components/cocktail/CocktailGrid/CocktailGrid";
import { Button } from "../../components/common/Button/Button";
import { Modal } from "../../components/common/Modal/Modal";
import styles from "./Favorites.module.scss";

export function Favorites() {
  const { t } = useTranslation();
  const { favorites, clearFavorites } = useFavorites();
  const [confirmOpen, setConfirmOpen] = useState(false);

  const drinks = favorites.map((item) => ({
    idDrink: item.id,
    strDrink: item.name,
    strDrinkThumb: item.thumb,
  }));

  const confirmClear = () => {
    clearFavorites();
    setConfirmOpen(false);
  };

  return (
    <div className={styles.favorites}>
      <div className={styles.header}>
        <h1>{t("nav.favorites")}</h1>
        {favorites.length > 0 ? (
          <Button variant="secondary" onClick={() => setConfirmOpen(true)}>
            {t("favorites.clear")}
          </Button>
        ) : null}
      </div>

      <CocktailGrid
        drinks={drinks}
        loading={false}
        emptyMessage={t("favorites.empty")}
      />

      <Modal
        isOpen={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        title={t("favorites.confirmClear")}
      >
        <div className={styles.actions}>
          <Button variant="ghost" onClick={() => setConfirmOpen(false)}>
            {t("common.cancel")}
          </Button>
          <Button variant="secondary" onClick={confirmClear}>
            {t("favorites.clear")}
          </Button>
        </div>
      </Modal>
    </div>
  );
}
