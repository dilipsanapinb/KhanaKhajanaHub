
import './App.css';
import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import LandingPage from './pages/LandingPage';
import SignInPage from './pages/SignInPage';
import RecipePage from './pages/RecipePage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signinpage" element={<SignInPage />} />
        <Route path="/recipepage" element={<RecipePage/> } />
      </Routes>
    </Router>
  );
}

export default App;
