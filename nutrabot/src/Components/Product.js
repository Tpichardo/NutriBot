import React from "react";
import "./Product.css";
import placeholder from "../Assets/food-placeholder.png";

export default function Product({
  name,
  image,
  caloryCount,
  protein,
  carbs,
  fat,
  addtoMymeals,
}) {
  return (
    <tr>
      <td>
        {" "}
        {image ? (
          <img src={image} alt={name} className="productimage" />
        ) : (
          <img src={placeholder} alt={name} className="productimage" />
        )}
      </td>
      <td>{name}</td>
      <td>{caloryCount}</td>
      <td> {protein}</td>
      <td>{carbs}</td>
      <td>{fat}</td>
      <td>
        {" "}
        <button onClick={() => addtoMymeals(name, caloryCount, protein, carbs, fat)}>Add To My Meals</button>
      </td>
    </tr>
  );
}
