// import Image from "next/image";
// import styles from "./page.module.css";
import Link from "next/link";

export default async function Home() {
  const res = await fetch('https://pokeapi.co/api/v2/pokedex/2');
  const data = await res.json();
  //console.log(data)
  const pokemonEntries = data.pokemon_entries.map((item:{ pokemon_species: {name: string}}, index:number)=>{ 
        const pokemon = item.pokemon_species.name

        return <Link  key={index}
                href={`https://img.pokemondb.net/artwork/${pokemon}.jpg`}
                ><li>{pokemon}
                
                </li></Link>
      })
  return (
    <div>
      <h1>{data.name}</h1>
      <ul>
        {pokemonEntries}
      </ul>
    </div>
  );
}
