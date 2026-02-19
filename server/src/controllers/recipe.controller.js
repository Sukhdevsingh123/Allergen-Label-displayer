import { parseExcelFile } from "../services/excel.service.js";
import { processAllergens } from "../services/allergen.service.js";

export const uploadAndParse = async (req, res) => {
  if (!req.file) {
    throw new Error("File is required");
  }

  const recipes = parseExcelFile(req.file.path);

  res.json({
    success: true,
    recipes
  });
};

export const processRecipes = async (req, res) => {
  const { recipes } = req.body;

  if (!recipes || !recipes.length) {
    throw new Error("Recipes are required");
  }

  const result = await processAllergens(recipes);

  res.json({
    success: true,
    data: result
  });
};
