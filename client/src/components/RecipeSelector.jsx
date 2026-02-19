import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";

const RecipeSelector = () => {
  const {
    processedData,
    setSelectedRecipe,
    selectedRecipe
  } = useContext(RecipeContext);

  if (!processedData.length) return null;

  return (
    <div className="flex items-center space-x-3">
      <label htmlFor="recipe-select" className="text-gray-600 font-medium hidden sm:block">Switch Recipe:</label>
      <div className="relative">
        <select
          id="recipe-select"
          value={selectedRecipe?.name || "Select Recipe"}
          onChange={(e) =>
            setSelectedRecipe(
              processedData.find(
                (r) => r.name === e.target.value
              )
            )
          }
          className="appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10 cursor-pointer transition-all hover:bg-white font-bold"
        >
          <option disabled>Select Recipe</option>
          {processedData.map((r, index) => (
            <option key={index} value={r.name}>
              {r.name}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-500">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default RecipeSelector;

