const INGREDIENT_SLOTS = 15;

export function parseIngredients(drink) {
  if (!drink) return [];
  const pairs = [];
  for (let slot = 1; slot <= INGREDIENT_SLOTS; slot += 1) {
    const ingredient = drink[`strIngredient${slot}`];
    if (ingredient && ingredient.trim()) {
      const measure = drink[`strMeasure${slot}`];
      pairs.push({
        ingredient: ingredient.trim(),
        measure: measure ? measure.trim() : "",
      });
    }
  }
  return pairs;
}
