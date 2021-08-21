import axios from "axios";

const foodApiKey = process.env.REACT_APP_FOOD_API_KEY;
const foodApiId = process.env.REACT_APP_FOOD_API_ID;
const recipeApiKey = process.env.REACT_APP_RECIPE_API_KEY;
const recipeApiId = process.env.REACT_APP_RECIPE_API_ID;
const nutritionAnalysisApiKey =
  process.env.REACT_APP_NUTRITION_ANALYSIS_API_KEY;
const nutritionAnalysisApiId = process.env.REACT_APP_NUTRITION_ANALYSIS_API_ID;

const getProduct = async (input) => {
  const { data } = await axios.get(
    `https://api.edamam.com/api/food-database/v2/parser?app_id=${foodApiId}&app_key=${foodApiKey}&ingr=${input}&nutrition-type=cooking`
  );
  return data.hints;
};

const getRecipe = async (input) => {
  const { data } = await axios.get(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${input}&app_id=${recipeApiId}&app_key=${recipeApiKey}`
  );
  return data.hits;
};

const functions = {
  getProduct,
  getRecipe,
};

export default functions;
