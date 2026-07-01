import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useLocalStorage("cocktail-favorites", []);

  const addFavorite = (drink) =>
    setFavorites((current) =>
      current.some((item) => item.id === drink.id)
        ? current
        : [...current, drink],
    );

  const removeFavorite = (id) =>
    setFavorites((current) => current.filter((item) => item.id !== id));

  const isFavorite = (id) => favorites.some((item) => item.id === id);

  const clearFavorites = () => setFavorites([]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
        clearFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
