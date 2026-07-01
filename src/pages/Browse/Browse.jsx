import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SearchInput } from "../../components/common/SearchInput/SearchInput";
import { Filters } from "../../components/cocktail/Filters/Filters";
import { CocktailGrid } from "../../components/cocktail/CocktailGrid/CocktailGrid";
import { Button } from "../../components/common/Button/Button";
import { useDebounce } from "../../hooks/useDebounce";
import { useFetch } from "../../hooks/useFetch";
import {
  searchByName,
  filterByIngredient,
  filterByCategory,
  filterByGlass,
  filterByAlcoholic,
  listCategories,
} from "../../api/cocktailApi";
import styles from "./Browse.module.scss";

export function Browse() {
  const { t } = useTranslation();
  const [params] = useSearchParams();
  const [term, setTerm] = useState("");
  const [mode, setMode] = useState("name");
  const [filters, setFilters] = useState({
    category: params.get("category") ?? "",
    glass: "",
    alcoholic: "",
  });

  const debouncedTerm = useDebounce(term, 300);
  const categories = useFetch(listCategories, []);

  const fetcher = useMemo(() => {
    if (filters.category) return () => filterByCategory(filters.category);
    if (filters.glass) return () => filterByGlass(filters.glass);
    if (filters.alcoholic) return () => filterByAlcoholic(filters.alcoholic);
    if (debouncedTerm && mode === "ingredient")
      return () => filterByIngredient(debouncedTerm);
    if (debouncedTerm) return () => searchByName(debouncedTerm);
    return () => searchByName("margarita");
  }, [filters, debouncedTerm, mode]);

  const results = useFetch(fetcher, [fetcher]);

  const handleFilterChange = (partial) =>
    setFilters((current) => ({ ...current, ...partial }));

  useEffect(() => {
    const category = params.get("category");
    if (category) setFilters((current) => ({ ...current, category }));
  }, [params]);

  return (
    <div className={styles.browse}>
      <div className={styles.controls}>
        <SearchInput
          value={term}
          onChange={(event) => setTerm(event.target.value)}
          placeholder={t("browse.searchPlaceholder")}
        />
        <div className={styles.modes}>
          <Button
            variant={mode === "name" ? "primary" : "ghost"}
            size="sm"
            onClick={() => setMode("name")}
          >
            {t("browse.byName")}
          </Button>
          <Button
            variant={mode === "ingredient" ? "primary" : "ghost"}
            size="sm"
            onClick={() => setMode("ingredient")}
          >
            {t("browse.byIngredient")}
          </Button>
        </div>
      </div>

      <Filters
        categories={categories.data ?? []}
        value={filters}
        onChange={handleFilterChange}
      />

      <CocktailGrid
        drinks={results.data ?? []}
        loading={results.loading}
        emptyMessage={t("common.noResults")}
      />
    </div>
  );
}
