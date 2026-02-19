import xlsx from "xlsx";

export const parseExcelFile = (filePath) => {
  const workbook = xlsx.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = xlsx.utils.sheet_to_json(sheet);

  console.log("Excel parsing started. Rows found:", data.length);
  if (!data.length) {
    throw new Error("Excel file is empty");
  }

  // Log keys of the first row to help debug header issues
  console.log("Excel Headers found:", Object.keys(data[0]));

  const recipesMap = {};

  data.forEach((row, index) => {
    // Look for headers with case-insensitive matching or common variations
    const recipeNameKey = Object.keys(row).find(k => {
      const normalized = k.toLowerCase().replace(/[\s_]/g, '');
      return normalized === 'recipename' || normalized === 'product' || normalized === 'recipe';
    });

    const ingredientKey = Object.keys(row).find(k => {
      const normalized = k.toLowerCase().replace(/[\s_]/g, '');
      return normalized === 'ingredient' || normalized === 'ingredients' || normalized === 'component';
    });

    const recipeName = row[recipeNameKey];
    const ingredient = row[ingredientKey];

    if (!recipeName || !ingredient) {
      console.log(`Row ${index + 2}: Missing name or ingredient. Keys present:`, Object.keys(row));
      return;
    }

    if (!recipesMap[recipeName]) {
      recipesMap[recipeName] = [];
    }

    recipesMap[recipeName].push(ingredient);
  });

  const recipes = Object.keys(recipesMap).map((name) => ({
    name,
    ingredients: recipesMap[name]
  }));

  console.log("Recipes parsed successfully:", recipes.length);
  if (recipes.length === 0) {
    const headers = data.length > 0 ? Object.keys(data[0]).join(", ") : "none";
    throw new Error(`No recipes found. Expected headers like 'Recipe Name' and 'Ingredient', but found: [${headers}]. Please check your Excel file.`);
  }

  return recipes;
};
