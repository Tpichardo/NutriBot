import React from "react";

export default function Meal({ meal, removeProduct }) {
  return (

    <tr>
      <td> {meal.mealName}</td>
      <td>{meal.mealCalories}</td>
      <td>{meal.mealProtein}{'g'}</td>
      <td>{meal.mealCarbs}{'g'}</td>
      <td>{meal.mealFat}{'g'}</td>
      <td>
        <button onClick={() => removeProduct(meal.id)}>remove</button>
      </td>
    </tr>


  );
}
