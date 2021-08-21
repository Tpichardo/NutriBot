import axios from "axios";

const foodApiKey = process.env.REACT_APP_FOOD_API_KEY;
const foodApiId = process.env.REACT_APP_FOOD_API_ID;
const nutritionAnalysisApiKey =
  process.env.REACT_APP_NUTRITION_ANALYSIS_API_KEY;
const nutritionAnalysisApiId = process.env.REACT_APP_NUTRITION_ANALYSIS_API_ID;

const getProduct = async (input) => {
  const { data } = await axios.get(
    `https://api.edamam.com/api/food-database/v2/parser?app_id=${foodApiId}&app_key=${foodApiKey}&ingr=${input}&nutrition-type=cooking`
  );
  return data.hints;
};

const functions = {
  getProduct,
};

export default functions;
