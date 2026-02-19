import axios from "axios";
import { ALLERGEN_API } from "../config/index.js";

export const processAllergens = async (recipes) => {
  const result = [];

  for (const recipe of recipes) {
    const allergensSet = new Set();
    const unrecognized = [];
    const warnings = [];

    for (const rawIngredient of recipe.ingredients) {
      const ingredient = rawIngredient.trim();
      try {
        const response = await axios.post(ALLERGEN_API, {
          ingredient
        });

        if (response.data.success) {
          response.data.allergens.forEach((a) =>
            allergensSet.add(a)
          );

          response.data.allergens.forEach((a) => {
            warnings.push(
              `${ingredient} contains ${a}, which is a common allergen.`
            );
          });
        } else {
          unrecognized.push(ingredient);
        }
      } catch (error) {
        unrecognized.push(ingredient);
      }
    }

    result.push({
      name: recipe.name,
      ingredients: recipe.ingredients,
      allergens: Array.from(allergensSet),
      unrecognized,
      warnings
    });
  }

  return result;
};
