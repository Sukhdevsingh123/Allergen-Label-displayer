import Home from "./pages/Home";
import { RecipeProvider } from "./context/RecipeContext";

function App() {
  return (
    <RecipeProvider>
      <Home />
    </RecipeProvider>
  );
}

export default App;
