
import './App.css';
import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import LandingPage from './pages/LandingPage';
import SignInPage from './pages/SignInPage';
import RecipePage from './pages/RecipePage';
import RecipeDetailsPage from './components/Recipe/RecipeDetailsPage';
import SavedRecipesPage from './pages/SavedRecipesPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signinpage" element={<SignInPage />} />
        <Route path="/recipepage" element={<RecipePage />} />
        <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
        <Route path="/recipe/save" element={< SavedRecipesPage/> } />
      </Routes>
    </Router>
  );
}

export default App;
