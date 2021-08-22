import React, { useState } from "react";
import firebase from "./util/firebase";

export default function FormCustomProducts() {
  const [mealName, setMealName] = useState("");
  const [mealCalories, setMealCalories] = useState("");
  const [mealFat, setMealFat] = useState("");
  const [mealProtein, setMealProtein] = useState("");
  const [mealCarbs, setMealCarbs] = useState("");

  const createMeal = (e) => {
    e.preventDefault();
    const mealRef = firebase.database().ref("Meals");
    const meal = {
      mealName,
      mealCalories,
      mealFat, 
      mealCarbs, 
      mealProtein
    };
    mealRef.push(meal);
    setMealCalories(0);
    setMealName("");
  };

  const handleChangeMeal = (e) => {
    setMealName(e.target.value);
  };

  const handleChangeCalory = (e) => {
    setMealCalories(e.target.value);
  };

  const handleChangeProtein = (e) => {
    setMealProtein(e.target.value);
  };
  const handleChangeFat = (e) => {
    setMealFat(e.target.value);
  };
  const handleChangeCarbs = (e) => {
    setMealCarbs(e.target.value);
  };
  return (
    <div className="customform">
    <h4>Enter a custom food product</h4>
    <form onSubmit={createMeal}>
      <input
        type="text"
        placeholder="Enter product name"
        value={mealName}
        required
        onChange={handleChangeMeal}
      />
      <input
        type="number"
        placeholder="Enter product calories"
        value={mealCalories}
        required
        onChange={handleChangeCalory}
      />
        <input
        type="number"
        placeholder="Enter product protein content"
        value={mealProtein}
        required
        onChange={handleChangeProtein}
      />
        <input
        type="number"
        placeholder="Enter product carbs content"
        value={mealCarbs}
        required
        onChange={handleChangeCarbs}
      />
        <input
        type="number"
        placeholder="Enter product fat content"
        value={mealFat}
        required
        onChange={handleChangeFat}
      />
      <button className="button-add" type="submit">
        Add{" "}
      </button>
    </form>
    </div>
  );
}
