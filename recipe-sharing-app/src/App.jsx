import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';


const App = () => {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        {/* Navigation Links */}
        <nav>
          <Link to="/">Home</Link> | <Link to="/add-recipe">Add Recipe</Link>
        </nav>
        <hr />
        
        <Routes>
          {/* Main route for displaying the recipe list */}
          <Route path="/" element={<RecipeList />} />

          {/* Route for recipe details */}
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />

          {/* Route for adding a new recipe */}
          <Route path="/add-recipe" element={<AddRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
