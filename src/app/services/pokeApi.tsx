import Link from "next/link";
import styles from '@/app/page.module.css'
export async function Kanto() {
    //Get API data from Kanto pokedex
  const res = await fetch('https://pokeapi.co/api/v2/pokedex/2');
  const data = await res.json();
  //console.log(data)
  const pokemonEntries = data.pokemon_entries.map((item:{ pokemon_species: {name: string}}, index:number)=>{ 
        const pokemon = item.pokemon_species.name

        return (<Link  
                className={styles.pokemonName}
                key={index}
                href={`/pokemon/${pokemon}`}
                ><li>{pokemon}
                
                </li></Link>)
      })
    return pokemonEntries
    
}