
import Link from "next/link";
import Image from "next/image";
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
        <main>

        <div>
            <h2>{pokemon.name}</h2>
            <Image
            src={imageSrc}
            alt={pokemon.name}
            width={200}
            height={200}
            />
            <p>Type: {type.join(', ')}</p>

        </div>
        <div>
            <h3>Rate Pokemon</h3>
            <RatePokemon/>
        </div>
        <Link
        href='/'
        className="button"
        >GO HOME</Link>
        </main>
    )
}