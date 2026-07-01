import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useFetch } from "../../hooks/useFetch";
import { getRandom, listCategories } from "../../api/cocktailApi";
import { CocktailCard } from "../../components/cocktail/CocktailCard/CocktailCard";
import { Spinner } from "../../components/common/Spinner/Spinner";
import { Button } from "../../components/common/Button/Button";
import styles from "./Home.module.scss";

export function Home() {
  const { t } = useTranslation();
  const random = useFetch(getRandom, []);
  const categories = useFetch(listCategories, []);

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <h1>{t("app.name")}</h1>
        <p className={styles.tagline}>{t("app.tagline")}</p>
        <Button onClick={random.refetch}>{t("nav.surprise")}</Button>
      </section>

      <section className={styles.moment}>
        {random.loading ? <Spinner label={t("common.loading")} /> : null}
        {random.data ? <CocktailCard drink={random.data} /> : null}
      </section>

      <section className={styles.categories}>
        {(categories.data ?? []).map((category) => (
          <Link
            key={category}
            to={`/browse?category=${encodeURIComponent(category)}`}
            className={styles.chip}
          >
            {category}
          </Link>
        ))}
      </section>
    </div>
  );
}
