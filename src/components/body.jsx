/* eslint react/prop-types: 0 */
import { useEffect, useState } from "react";
import pokemonArray from "./pokemon-array";

export default function Body({ increaseCScore, resetCScore, checkHighScore }) {
  const [pokemons, setPokemons] = useState([]);
  const [clickedMons, setClickedMons] = useState([]);

  useEffect(() => {
    async function getThePokemons(name) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      return await response.json();
    }

    async function renderPokemons() {
      const pokemonData = await Promise.all(pokemonArray.map(getThePokemons));
      setPokemons(pokemonData);
    }

    renderPokemons();
  }, []);

  function processClick(e) {
    let name = e.target.alt;
    let isDuplicate = clickedMons.filter((pNames) => pNames === name);
    if (isDuplicate.length === 0) {
      setClickedMons([...clickedMons, name]);
      shuffle();
      increaseCScore();
    } else {
      checkHighScore();
      resetCScore();
      setClickedMons([]);
    }
  }

  //Fisher-Yates Knuth Shuffle, credits to
  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

  function shuffle() {
    let currentIndex = pokemons.length;
    let array = pokemons.slice(0);

    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    setPokemons(array);
  }

  if (pokemons.length > 0) {
    return (
      <section>
        <div className="cards">
          {pokemons.map((pokemon) => {
            return (
              <PokeCard
                pokemon={pokemon}
                key={pokemon.species.name}
                processClick={processClick}
              />
            );
          })}
        </div>
      </section>
    );
  } else {
    return <div className="loading-div">Loading</div>;
  }
}

function PokeCard({ pokemon, processClick }) {
  return (
    <div className="card-container" onClick={processClick}>
      <div className="pokemon-container">
        <div className="p-header">{pokemon.species.name}</div>
        <div className="p-health">{pokemon.stats[0]["base_stat"]}</div>
        <div className="p-image">
          <img
            src={pokemon.sprites["front_default"]}
            alt={pokemon.species.name}
          />
        </div>
        <div className="p-ability">{pokemon.abilities[0].ability.name}</div>
      </div>
    </div>
  );
}
