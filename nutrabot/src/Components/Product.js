import React from 'react'
import "./Product.css"
import placeholder from "../Assets/food-placeholder.png"

export default function Product({name, image, caloryCount, protein, carbs, fat, addtoMymeals}) {
    return (
     

            <tr>
                <td>  {image ? <img src={image} alt={name} className="productimage" /> : <img src={placeholder} alt={name} className="productimage"/>   }</td>
                <td>{name}</td>
                <td>{caloryCount.toFixed(1)}</td>
                <td> {protein.toFixed(1)}</td>
                <td>{carbs.toFixed(1)}</td>
                <td>{fat.toFixed(1)}</td>
                <button onClick={addtoMymeals}>Add To My Meals</button>
            </tr>

    )
}


