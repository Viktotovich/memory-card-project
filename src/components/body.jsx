import { useEffect, useState } from "react";
import pokemonArray from "./pokemon-array";

export default function Body() {
  /*OOOOOOOHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH, WE CAN ADD LOADING ICONSSSSSSSSS */
  const [pokemons, setPokemons] = useState([]);

  return (
    <section>
      <div>Stuff here</div>
    </section>
  );
}

function PokeCard() {
  return (
    <div className="card-container">
      <div className="pokemon-container">
        <div className="p-header">Pokemon Name</div>
        <div className="p-health">HP 100</div>
        <div className="p-image">
          <img src="/fake-a-mon.webp" alt="fake pokemon" />
        </div>
        <div className="p-ability">Cuddle</div>
      </div>
    </div>
  );
}

/* 

export default function Body() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async () => {
      const pokemonData = [];
      for (const pokemon of pokemonArray) {
        const pJSON = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        await pokemonData.push(pJSON)
      }
    };
  }, []);


  return (
    <section>
      <div>Stuff here</div>
    </section>
  );
}
*/
