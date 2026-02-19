import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";

const AllergenDisplay = () => {
  const { selectedRecipe } = useContext(RecipeContext);

  if (!selectedRecipe) return null;

  return (
    <div className="bg-[#2c3e50] text-[#ecf0f1] rounded shadow-xl p-8 transition-all font-mono leading-relaxed max-w-4xl mx-auto">
      <div className="mb-6">
        <h2 className="text-xl">
          Recipe: {selectedRecipe.name}
        </h2>
        <div className="text-gray-400">
          ----------------------------------------------
        </div>
      </div>

      <div className="space-y-6 text-[15px]">
        <section>
          <h3 className="mb-2">Ingredients:</h3>
          <ul className="space-y-1">
            {selectedRecipe.ingredients.map((i, idx) => (
              <li key={idx}>- {i}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="mb-2">Allergens:</h3>
          <ul className="space-y-1">
            {selectedRecipe.allergens.length > 0 ? (
              selectedRecipe.allergens.map((a, idx) => (
                <li key={idx}>- {a}</li>
              ))
            ) : (
              <li>- None</li>
            )}
          </ul>
        </section>

        <section>
          <h3 className="mb-2">Unrecognized Ingredients:</h3>
          <ul className="space-y-1">
            {selectedRecipe.unrecognized.length > 0 ? (
              selectedRecipe.unrecognized.map((u, idx) => (
                <li key={idx}>- {u}</li>
              ))
            ) : (
              <li>- None</li>
            )}
          </ul>
        </section>

        <section>
          <h3 className="mb-2">Warnings:</h3>
          <ul className="space-y-1">
            {selectedRecipe.warnings.length > 0 ? (
              selectedRecipe.warnings.map((w, idx) => (
                <li key={idx}>- {w}</li>
              ))
            ) : (
              <li>- None</li>
            )}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AllergenDisplay;
