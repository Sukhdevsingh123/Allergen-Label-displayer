import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";

const AllergenDisplay = () => {
  const { selectedRecipe } = useContext(RecipeContext);

  if (!selectedRecipe) return null;

  return (
    <div className="bg-[#2c3e50] text-[#ecf0f1] rounded-xl shadow-2xl p-8 transition-all animate-in zoom-in duration-300">
      <div className="border-b border-gray-600 pb-4 mb-6">
        <h2 className="text-2xl font-mono tracking-tight">
          Recipe: {selectedRecipe.name}
        </h2>
        <div className="h-0.5 w-full bg-gray-600 mt-2"></div>
      </div>

      <div className="space-y-8">
        <section>
          <h3 className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-3">Ingredients:</h3>
          <div className="flex flex-wrap gap-2">
            {selectedRecipe.ingredients.map((i, idx) => (
              <span key={idx} className="bg-gray-700/50 px-3 py-1 rounded border border-gray-600 text-sm italic">
                - {i}
              </span>
            ))}
          </div>
        </section>

        <section className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-3">Identified Allergens:</h3>
              <ul className="space-y-1">
                {selectedRecipe.allergens.length > 0 ? (
                  selectedRecipe.allergens.map((a, idx) => (
                    <li key={idx} className="flex items-center text-red-400 font-medium font-mono">
                      <span className="mr-2">🔥</span> - {a}
                    </li>
                  ))
                ) : (
                  <li className="text-gray-500 italic">- None</li>
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-3">Unrecognized Ingredients:</h3>
              <ul className="space-y-1">
                {selectedRecipe.unrecognized.length > 0 ? (
                  selectedRecipe.unrecognized.map((u, idx) => (
                    <li key={idx} className="text-amber-400 font-mono">- {u}</li>
                  ))
                ) : (
                  <li className="text-gray-500 italic">- None</li>
                )}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-3">Warnings:</h3>
          <div className="space-y-2">
            {selectedRecipe.warnings.length > 0 ? (
              selectedRecipe.warnings.map((w, idx) => (
                <div key={idx} className="flex items-start bg-red-900/20 border-l-4 border-red-500 p-4 font-mono text-sm leading-relaxed">
                  <span className="mr-3 mt-0.5 text-red-500">⚠️</span>
                  <p>- {w}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 italic font-mono">- None</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AllergenDisplay;
