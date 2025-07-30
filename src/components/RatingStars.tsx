'use client'
import React, { useState } from "react";
import { TbPokeball } from "react-icons/tb";
import styles from "@/app/page.module.css"

export function RatePokemon() {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    return (
        <div className={styles.rating}>
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
                        className={styles.rating_ball} 
                        color={ index <= ( hover || rating) ? "#f00000" : "#f0f0f0"} 
                        size={40} 
                        
                        onMouseEnter={()=>setHover(index)}
                        onMouseLeave={() =>setHover(0)}
                        />
                    </label>
                )
            })}
        </div>
    )
}