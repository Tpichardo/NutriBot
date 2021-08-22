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
      <td>{caloryCount.toFixed(0)}</td>
      <td> {protein.toFixed(0)}</td>
      <td>{carbs.toFixed(0)}</td>
      <td>{fat.toFixed(0)}</td>
      <td>
        {" "}
        <button onClick={ () => addtoMymeals(name, caloryCount, protein, carbs, fat)}>Add To My Meals</button>
      </td>
    </tr>
  );
}
