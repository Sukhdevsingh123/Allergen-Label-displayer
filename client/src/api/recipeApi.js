import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5001/api/recipes"
});

export const uploadFile = (formData) =>
  API.post("/upload", formData);

export const processRecipes = (recipes) =>
  API.post("/process", { recipes });
