
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/page.module.css";
import { RatePokemon } from "@/components/RatingStars";

interface PokemonPageProps {
    params: Promise<{
        name: string
    }>
}
export default async function PokemonDetails({params}: PokemonPageProps){
    //Get Image from another source
    const pokemon = await params;
    const imageSrc = `https://img.pokemondb.net/artwork/${pokemon.name}.jpg`;
    //Get pokemon data
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
    const pokemonData = await res.json()
    const type = pokemonData.types.map((type: {type:{name:string}})=>{
        return type.type.name

    })
   
    return(
        <main className={styles.poke_detail_page}>

        <div>
            <h2>{(pokemon.name).toLocaleUpperCase()}</h2>
            <Image
            className={styles.image}
            src={imageSrc}
            alt={pokemon.name}
            width={200}
            height={200}
            />
            <p className={styles.types}>Type: {type.join(', ')}</p>

        </div>
        <div className={styles.rate_div}>
            <h3>Rate Pokemon</h3>
            <RatePokemon/>
        </div>
        <Link
        href='/'
        className={styles.button}
        >GO HOME</Link>
        </main>
    )
}