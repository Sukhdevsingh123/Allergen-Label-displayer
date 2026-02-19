import { useContext, useState } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { uploadFile } from "../api/recipeApi";
import { toast } from "react-hot-toast";

const FileUpload = () => {
  const { setRecipes, setError, setLoading } = useContext(RecipeContext);
  const [isDragging, setIsDragging] = useState(false);

  const processFile = async (file) => {
    if (!file) return;
    if (!file.name.endsWith(".xlsx")) {
      const errorMsg = "Please upload a valid .xlsx file";
      setError(errorMsg);
      toast.error(errorMsg);
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      setError("");
      toast.loading("Uploading recipes...", { id: "upload" });

      const { data } = await uploadFile(formData);

      if (data.recipes && data.recipes.length > 0) {
        setRecipes(data.recipes);
        toast.success("File uploaded successfully!", { id: "upload" });
      } else {
        const errorMsg = "No recipes were found in the file.";
        setError(errorMsg);
        toast.error(errorMsg, { id: "upload" });
      }
    } catch (err) {
      const msg = err.response?.data?.message || err.message || "Upload failed. Please check the file format.";
      setError(msg);
      toast.error(msg, { id: "upload" });
      console.error("Upload failed:", msg);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    processFile(e.target.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    processFile(e.dataTransfer.files[0]);
  };

  return (
    <div className="w-full">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all ${isDragging
          ? "border-blue-500 bg-blue-50 scale-[1.01]"
          : "border-gray-300 bg-gray-50 hover:bg-gray-100 hover:border-gray-400"
          }`}
      >
        <input
          type="file"
          accept=".xlsx"
          onChange={handleFileChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          id="fileInput"
        />
        <div className="flex flex-col items-center">
          <svg className="w-12 h-12 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <p className="text-lg font-semibold text-gray-700">Click to upload or drag & drop</p>
          <p className="text-sm text-gray-500 mt-1">Excel file (.xlsx) containing multiple recipes</p>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
