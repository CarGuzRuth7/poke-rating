'use client'
import React, { useState } from "react";
import { TbPokeball } from "react-icons/tb";

export function RatePokemon() {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    return (
        <div className="rating">
            { [... new Array(5)].map((rate, index) => {
                const rateValue = index + 1
                return (
                    <label key={index}>
                        <input 
                        type="radio" 
                        name="rating" 
                        value={rateValue}
                        onClick={() =>setRating(index)}
                        required
                        />
                        <TbPokeball 
                        className="rating-star" 
                        color={ index <= ( hover || rating) ? "#f00000" : "#f0f0f0"} 
                        size={30} 
                        
                        onMouseEnter={()=>setHover(index)}
                        onMouseLeave={() =>setHover(0)}
                        />
                    </label>
                )
            })}
        </div>
    )
}