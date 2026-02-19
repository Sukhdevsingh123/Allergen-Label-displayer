import express from "express";
import { upload } from "../middlewares/upload.middleware.js";
import {
  uploadAndParse,
  processRecipes
} from "../controllers/recipe.controller.js";

const router = express.Router();

router.post(
  "/upload",
  (req, res, next) => {
    console.log("Upload route hit");
    next();
  },
  upload.single("file"),
  uploadAndParse
);
router.post("/process", processRecipes);

export default router;
