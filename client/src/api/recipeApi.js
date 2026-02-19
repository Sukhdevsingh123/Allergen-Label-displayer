import axios from "axios";

const API = axios.create({
  //localhost url
  // baseURL: "http://localhost:5001/api/recipes"

  //render url
  baseURL: "https://allergen-label-displayer.onrender.com/api/recipes"
});

export const uploadFile = (formData) =>
  API.post("/upload", formData);

export const processRecipes = (recipes) =>
  API.post("/process", { recipes });
