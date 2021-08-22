import React from "react";

export default function Meal({ meal }) {
  return (
    <tr>
      <td> {meal.mealName}</td>
      <td>{meal.mealCalories}</td>
    </tr>
  );
}
