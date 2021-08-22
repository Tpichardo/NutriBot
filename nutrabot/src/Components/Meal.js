import React from "react";

export default function Meal({ meal, removeProduct }) {
  return (
  
    <tr>
      <td> {meal.mealName}</td>
      <td>{meal.mealCalories}</td>
      <td>{meal.mealProtein}</td>
      <td>{meal.mealCarbs}</td>
      <td>{meal.mealFat}</td>
      <td>
        <button onClick={() => removeProduct(meal.id)}>remove</button>
      </td>
    </tr>
   

  );
}
