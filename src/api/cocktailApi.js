import axios from "axios";

const client = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1/",
});

async function fetchDrinks(path, params) {
  const response = await client.get(path, { params });
  return Array.isArray(response.data.drinks) ? response.data.drinks : [];
}

export const searchByName = (name) => fetchDrinks("search.php", { s: name });
export const filterByIngredient = (ingredient) =>
  fetchDrinks("filter.php", { i: ingredient });
export const filterByCategory = (category) =>
  fetchDrinks("filter.php", { c: category });
export const filterByGlass = (glass) => fetchDrinks("filter.php", { g: glass });
export const filterByAlcoholic = (type) =>
  fetchDrinks("filter.php", { a: type });

export async function lookupById(id) {
  const drinks = await fetchDrinks("lookup.php", { i: id });
  return drinks[0] ?? null;
}

export async function getRandom() {
  const drinks = await fetchDrinks("random.php");
  return drinks[0] ?? null;
}

export async function listCategories() {
  const drinks = await fetchDrinks("list.php", { c: "list" });
  return drinks.map((entry) => entry.strCategory);
}
