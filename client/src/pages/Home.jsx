import FileUpload from "../components/FileUpload";
import RecipeTable from "../components/RecipeTable";
import RecipeSelector from "../components/RecipeSelector";
import AllergenDisplay from "../components/AllergenDisplay";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";

const Home = () => {
  const { loading, error, recipes, processedData } =
    useContext(RecipeContext);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white border-b-2 border-blue-500 py-6 mb-8 shadow-sm">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold text-[#2c3e50]">
            Allergen Label Displayer
          </h1>
          <p className="text-gray-500 font-medium mt-1">Coding Challenge</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 space-y-8">
        {error && (
          <div className="bg-red-50 border-l-4 border-red-800 p-6 rounded-xl shadow-lg animate-bounce">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-red-800 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold text-red-800">Error Occurred</h3>
            </div>
            <p className="text-red-700 font-medium mt-2 ml-9">{error}</p>
          </div>
        )}

        {!recipes.length && !processedData.length && (
          <section className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transition-all">
            <h2 className="text-2xl font-bold text-blue-600 mb-6 border-b pb-4">Problem Statement</h2>
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                Your task is to build a <span className="font-bold">web application</span> that allows users to upload an <span className="font-bold">Excel file</span> containing multiple recipes,
                parse the extracted data, display it in a table for user validation, and once approved, determine allergens for each recipe.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                <li>Allow users to upload an Excel file containing multiple recipes.</li>
                <li>Validate the file format and structure on your server.</li>
                <li>Parse and extract ingredients from the uploaded file.</li>
                <li>Display extracted recipe data in a table for validation before processing.</li>
                <li>Determine allergens using the provided Allergen API.</li>
                <li>Show allergy labels in an interactive UI.</li>
                <li>Allow users to switch between recipes to see corresponding allergy information.</li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t">
              <FileUpload />
            </div>
          </section>
        )}

        {loading && (
          <div className="flex items-center justify-center p-12 bg-white rounded-xl shadow-md">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="ml-4 text-xl font-semibold text-gray-700">Processing recipes...</p>
          </div>
        )}

        {recipes.length > 0 && !processedData.length && (
          <div className="animate-in fade-in duration-500">
            <RecipeTable />
          </div>
        )}

        {processedData.length > 0 && (
          <div className="space-y-6 animate-in slide-in-from-bottom duration-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between bg-white p-6 rounded-xl shadow-md">
              <div>
                <h2 className="text-xl font-bold text-gray-800">Results Processed</h2>
                <p className="text-sm text-gray-500">Select a recipe below to view details</p>
              </div>
              <RecipeSelector />
            </div>
            <AllergenDisplay />

            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium shadow-sm"
            >
              Upload New File
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
