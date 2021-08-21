import React, { useState, useEffect } from "react";
import Product from "./Product";

export default function SearchResult({ searchedProducts, addtoMymeals }) {
  const [productResults, setProductResults] = useState([]);

  useEffect(() => {
    console.log("Inside the useEffect function");
    setProductResults(searchedProducts);
  }, [searchedProducts]);

  return (
    <div>
      <p>search results</p>

      {searchedProducts.map((product) => {
        return (
          <Product
            key={product.food.foodId}
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
    </div>
  );
}
