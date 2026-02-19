import FileUpload from "../components/FileUpload";
import RecipeTable from "../components/RecipeTable";
import RecipeSelector from "../components/RecipeSelector";
import AllergenDisplay from "../components/AllergenDisplay";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";

const Home = () => {
  const { loading, error, recipes, processedData, resetState, setProcessedData } =
    useContext(RecipeContext);

  const goBackToPreview = () => {
    setProcessedData([]);
  };

  return (
    <div className="pb-20">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Modern Hero Section */}
        {!recipes.length && !processedData.length && (
          <section className="pt-16 pb-8 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Analyze your recipes for <span className="text-blue-600">Allergens</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Upload your recipe Excel file and instantly identify ingredients that might cause issues for your customers. Simple, fast, and accurate.
            </p>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <FileUpload />
              <div className="mt-6 flex items-center justify-center space-x-4 text-xs text-gray-400">
                <span className="flex items-center"><svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> Secure Analysis</span>
                <span className="flex items-center"><svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> .xlsx Format</span>
              </div>
            </div>
          </section>
        )}

        {/* Improved Error Message */}
        {error && (
          <div className="max-w-3xl mx-auto mt-8 bg-red-50 border border-red-100 p-4 rounded-xl flex items-start">
            <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <p className="text-red-800 text-sm font-medium">{error}</p>
          </div>
        )}

        {/* Modern Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center p-20">
            <div className="relative w-16 h-16">
              <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-100 rounded-full"></div>
              <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
            </div>
            <p className="mt-6 text-gray-500 font-medium animate-pulse">Processing your recipes...</p>
          </div>
        )}

        {/* Recipe Preview Section */}
        {recipes.length > 0 && !processedData.length && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 italic">Extracted Recipes</h2>
                <p className="text-gray-500 text-sm">Please verify the ingredients before analysis</p>
              </div>
              <button
                onClick={resetState}
                className="text-sm font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 px-4 py-2 rounded-lg transition-all"
              >
                Change File
              </button>
            </div>
            <RecipeTable />
          </div>
        )}

        {/* Processed Results Section */}
        {processedData.length > 0 && (
          <div className="space-y-8 animate-in fade-in duration-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center">
                <button
                  onClick={goBackToPreview}
                  className="mr-4 p-2 hover:bg-gray-100 rounded-full transition-colors group"
                  title="Back to Preview"
                >
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l-7-7m7 7h18" /></svg>
                </button>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Analysis Results</h2>
                  <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider mt-1">Found {processedData.length} Recipes</p>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <RecipeSelector />
              </div>
            </div>

            <AllergenDisplay />

            <div className="flex justify-center pt-8">
              <button
                onClick={resetState}
                className="px-8 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-all font-semibold shadow-sm flex items-center group"
              >
                <svg className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                Upload New Analysis
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
