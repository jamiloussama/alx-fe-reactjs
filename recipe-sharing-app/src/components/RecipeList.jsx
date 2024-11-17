import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import SearchBar from './SearchBar';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
        <SearchBar />
      {filteredRecipes.length === 0 ? (
        <p>No recipes found. Try adjusting your search!</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: '20px' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            {/* Add Link to navigate to recipe details */}
            <Link to={`/recipes/${recipe.id}`}>View Details</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
