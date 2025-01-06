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

  if (pokemons.length > 0) {
    return (
      <section>
        <div>Stuff here</div>
      </section>
    );
  } else {
    return <div className="loading-div">Loading</div>;
  }
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

//This worked
async function mockCall2() {
  const pokemonData = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  return pokemonData.json();
}

//don't overcall - and check this out
//Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at https://pokeapi.co/api/v2/pokemon/poochyena. (Reason: CORS request did not succeed). Status code: (null).

/*

  useEffect(() => {
    async function getThePokemons(name) {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}/`
        );

        if (response.status >= 200 && response.status < 300) {
          return await response.json();
        } else {
          throw new Error(`Rejecc, HTTP status ${response.status}`);
        }
      } catch (err) {
        throw new Error(`${err.name}: ${err} at ${err.stack}`);
      }
    }

    async function renderPokemons() {
      pokemonArray.map((name) => console.log(name));
      const pokemonData = await Promise.all(pokemonArray.map(getThePokemons));
      setPokemons(pokemonData);
    }

    renderPokemons();
  }, []);
  
  Uncaught (in promise) Error: TypeError: TypeError: NetworkError when attempting to fetch resource. at 

  It's not an HTTP request error, rather a NetworkError
  */
