import { createContext, useState } from "react";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [processedData, setProcessedData] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <RecipeContext.Provider
      value={{
        recipes,
        setRecipes,
        processedData,
        setProcessedData,
        selectedRecipe,
        setSelectedRecipe,
        loading,
        setLoading,
        error,
        setError
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
