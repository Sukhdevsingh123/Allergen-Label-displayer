import express from "express";
import cors from "cors";
import recipeRoutes from "./routes/recipe.routes.js";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();

app.use((req, res, next) => {
  // console.log(`${req.method} ${req.url}`);
  next();
});

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: true
  })
);


app.use(express.json());

app.use("/api/recipes", recipeRoutes);

app.use(errorMiddleware);

export default app;
