import Image from "next/image";
import styles from "./page.module.css";
import { Kanto } from "./services/pokeApi";

export default async function Home() {
  return (
    <main>
      <div className={styles.presentation}>
        <h1>Pokemon Rating Page</h1>
        <Image
        src='/pokeball-png-45330.png'
        alt="Pokeball"
        width={100}
        height={100}
        />
        <p>Select a pokemon and rate it!</p>
      </div>
        <h2 className={styles.region}>Kanto Region</h2>
      <ul className={styles.list}>
        <Kanto/>
      </ul>
    </main>
  );
}
