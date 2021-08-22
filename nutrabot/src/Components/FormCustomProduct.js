import React, { useState } from "react";
import firebase from "./util/firebase";

export default function FormCustomProducts() {
  const [mealName, setMealName] = useState("");
  const [mealCalories, setMealCalories] = useState("");

  const createMeal = (e) => {
    e.preventDefault();
    const mealRef = firebase.database().ref("Meals");
    const meal = {
      mealName,
      mealCalories,
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

  return (
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
      <button className="button-add" type="submit">
        Add{" "}
      </button>
    </form>
  );
}
