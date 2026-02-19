import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { processRecipes } from "../api/recipeApi";

const RecipeTable = () => {
  const {
    recipes,
    setProcessedData,
    setLoading,
    setError
  } = useContext(RecipeContext);

  if (!recipes.length) return null;

  const handleProcess = async () => {
    try {
      setLoading(true);
      const { data } = await processRecipes(recipes);
      setProcessedData(data.data);
    } catch (err) {
      setError("Processing failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all">
      <div className="bg-blue-600 px-6 py-4">
        <h2 className="text-xl font-bold text-white uppercase tracking-wider">Preview Recipes</h2>
      </div>

      <div className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-100 text-gray-400 text-xs uppercase font-bold tracking-widest">
                <th className="py-3 px-4">Recipe Name</th>
                <th className="py-3 px-4">Ingredients</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {recipes.map((r, index) => (
                <tr key={index} className="hover:bg-blue-50/30 transition-colors">
                  <td className="py-4 px-4 font-semibold text-gray-800 align-top">
                    {r.name}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex flex-wrap gap-2">
                      {r.ingredients.map((ing, i) => (
                        <span key={i} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                          {ing}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={handleProcess}
            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-md active:scale-95 group"
          >
            <span>Process Allergens</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeTable;
