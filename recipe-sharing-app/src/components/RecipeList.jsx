import React from 'react';
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
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
