'use client'
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { TbPokeball } from "react-icons/tb";
import styles from "@/app/page.module.css";

interface PokeName {
    name: string
}

export function RatePokemon({name}:PokeName) {
    const [rating, setRating] = useState<number>(0);
    const [hover, setHover] = useState<number>(0);
    const pathname = usePathname()

    //get data from local storage
    useEffect(()=>{
        if (typeof window !== "undefined") {
            const savedRating = localStorage.getItem(`rating-${name}`);
            if (savedRating) {
                const num = Number(savedRating);
                setRating(num);
                setHover(num);
        } else {
            setRating(0);
            setHover(0);
        }
        }
    }, [name, pathname]);

    //save data to local storage
     useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(`rating-${name}`, String(rating));
    }
  }, [rating, name]);

  //handle click
   const handleRating = (value: number) => {
    setRating(value);
    setHover(value);
    
  };


    return (
        <div className={styles.rating}>
            { [... new Array(5)].map((_, index) => {
                const rateValue = index + 1
                return (
                    <label key={rateValue}>
                        <input 
                        type="radio" 
                        name={`rating-${name}`} 
                        value={rateValue}
                        checked={rating === rateValue}
                        onChange={() =>handleRating(rateValue)}
                        
                        />
                        <TbPokeball 
                        className={styles.rating_ball} 
                        color={ rateValue <= ( hover|| rating) ? "#f00000" : "#f0f0f0"} 
                        size={40} 
                        
                        onMouseEnter={()=>setHover(rateValue)}
                        onMouseLeave={() =>setHover(rating)}
                        />
                    </label>
                )
            })}
        </div>
    )
}