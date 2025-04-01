import "../styles/mainSection.css";
import Card from "./card.jsx";

export default function Main({
  pokemonList,
  setPokemonList,
  score,
  setScore,
  highScore,
  setHighScore,
}) {
  function getPokemonName(pokemon) {
    let name = `${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.substring(
      1
    )}`;

    if (pokemon.name === "raichu" && pokemon.isOtherVariety) {
      name = `Alolan ${name}`;
    }

    if (pokemon.name === "morpeko") {
      if (pokemon.isOtherVariety) {
        name = `${name} (Hangry Mode)`;
      } else {
        name = `${name} (Full Belly Mode)`;
      }
    }

    if (pokemon.isShiny) {
      name = `Shiny ${name}`;
    }

    return name;
  }
  return (
    <div className="main">
      {pokemonList.map((pokemon) => (
        <Card
          key={pokemon.id}
          id={pokemon.id}
          pokemonList={pokemonList}
          setPokemonList={setPokemonList}
          score={score}
          setScore={setScore}
          highScore={highScore}
          setHighScore={setHighScore}
          name={getPokemonName(pokemon)}
          src={pokemon.src}
        />
      ))}
    </div>
  );
}
