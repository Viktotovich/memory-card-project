import { useEffect, useState } from "react";
import pokemonArray from "./pokemon-array";

export default function Body() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function getThePokemons(name) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      return await response.json();
    }

    async function renderPokemons() {
      pokemonArray.map((name) => console.log(name));
      const pokemonData = await Promise.all(pokemonArray.map(getThePokemons));
      setPokemons(pokemonData);
    }

    //renderPokemons();
  }, []);

  console.log(pokemons);

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
