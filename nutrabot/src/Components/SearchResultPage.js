import React from "react";
import Product from "./Product";
import Recipe from "./Recipe";
import uuid from "react-uuid";

export default function SearchResult({
  searchedProducts,
  searchedRecipes,
  addtoMymeals,
  apiError,
}) {
  return (
    <div>
      {apiError && "API Error"}
      {searchedRecipes && (
        <section>
          <table>
            <thead>
              <tr>
                <th>Recommended Recipes</th>
              </tr>
            </thead>
            <tbody>
              {searchedRecipes.map((recipe) => {
                return (
                  <Recipe
                    key={uuid()}
                    name={recipe.recipe.label}
                    recipeCalories={recipe.recipe.calories}
                    image={recipe.recipe.image}
                    url={recipe.recipe.url}
                  />
                );
              })}
            </tbody>
          </table>
        </section>
      )}

      <br />

      {searchedProducts && (
        <section>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Calory Count</th>
                <th>Protein</th>
                <th>Carbs</th>
                <th>Fat</th>
                <th>Button</th>
              </tr>
            </thead>
            <tbody>
              {searchedProducts.map((product) => {
                return (
                  <Product
                    key={uuid()}
                    name={product.food.label}
                    image={product.food.image}
                    caloryCount={product.food.nutrients.ENERC_KCAL}
                    protein={product.food.nutrients.PROCNT}
                    carbs={product.food.nutrients.CHOCDF}
                    fat={product.food.nutrients.FAT}
                    addtoMymeals={addtoMymeals}
                  />
                );
              })}
            </tbody>
          </table>
        </section>
      )}
    </div>
  );
}
