import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 5001;
export const ALLERGEN_API =
  "https://task.cover360.co.in/api/allergens";
