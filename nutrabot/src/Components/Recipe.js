import React from 'react'
import "./Recipe.css"

export default function Recipe({ name, recipeCalories, image, url }) {
    return (
     <tr>
         <td>
             <h3>{name}</h3>
             <br />
             <img src={image} alt={name} className="recipeimg"/>
             <br />
             Calories: {recipeCalories.toFixed(0)}
             <br />
             <a href={url} >For more info click here</a>
             <br />
         </td>
     </tr>
    )
}

