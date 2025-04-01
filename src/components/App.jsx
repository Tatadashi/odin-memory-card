import "../styles/App.css";
import { useState, useEffect } from "react";
import Top from "./topSection.jsx";
import Main from "./mainSection.jsx";

function App() {
  const [score, setScore] = useState([]);
  const [highScore, setHighScore] = useState(0);
  const [pokemonList, setPokemonList] = useState([
    {
      name: "pikachu",
      id: 1,
      isShiny: false,
      isOtherVariety: false,
      src: null,
    },
    {
      name: "pikachu",
      id: 2,
      isShiny: true,
      isOtherVariety: false,
      src: null,
    },
    {
      name: "raichu",
      id: 3,
      isShiny: false,
      isOtherVariety: false,
      src: null,
    },
    {
      name: "raichu",
      id: 4,
      isShiny: true,
      isOtherVariety: false,
      src: null,
    },
    {
      name: "pichu",
      id: 5,
      isShiny: false,
      isOtherVariety: false,
      src: null,
    },
    {
      name: "pichu",
      id: 6,
      isShiny: true,
      isOtherVariety: false,
      src: null,
    },
    {
      name: "plusle",
      id: 7,
      isShiny: false,
      isOtherVariety: false,
      src: null,
    },
    {
      name: "plusle",
      id: 8,
      isShiny: true,
      isOtherVariety: false,
      src: null,
    },
    {
      name: "minun",
      id: 9,
      isShiny: false,
      isOtherVariety: false,
      src: null,
    },
    {
      name: "minun",
      id: 10,
      isShiny: true,
      isOtherVariety: false,
      src: null,
    },
    {
      name: "pachirisu",
      id: 11,
      isShiny: false,
      isOtherVariety: false,
      src: null,
    },
    {
      name: "pachirisu",
      id: 12,
      isShiny: true,
      isOtherVariety: false,
      src: null,
    },
    {
      name: "emolga",
      id: 13,
      isShiny: false,
      isOtherVariety: false,
      src: null,
    },
    {
      name: "emolga",
      id: 14,
      isShiny: true,
      isOtherVariety: false,
      src: null,
    },
    {
      name: "dedenne",
      id: 15,
      isShiny: false,
      isOtherVariety: false,
      src: null,
    },
    {
      name: "dedenne",
      id: 16,
      isShiny: true,
      isOtherVariety: false,
      src: null,
    },
    {
      name: "raichu",
      id: 17,
      isShiny: false,
      isOtherVariety: true,
      src: null,
    },
    {
      name: "raichu",
      id: 18,
      isShiny: true,
      isOtherVariety: true,
      src: null,
    },
    {
      name: "togedemaru",
      id: 19,
      isShiny: false,
      isOtherVariety: false,
      src: null,
    },
    {
      name: "togedemaru",
      id: 20,
      isShiny: true,
      isOtherVariety: false,
      src: null,
    },
    {
      name: "morpeko",
      id: 21,
      isShiny: false,
      isOtherVariety: false,
      src: null,
    },
    {
      name: "morpeko",
      id: 22,
      isShiny: true,
      isOtherVariety: false,
      src: null,
    },
    {
      name: "morpeko",
      id: 23,
      isShiny: false,
      isOtherVariety: true,
      src: null,
    },
    {
      name: "morpeko",
      id: 24,
      isShiny: true,
      isOtherVariety: true,
      src: null,
    },
    {
      name: "pawmi",
      id: 25,
      isShiny: false,
      isOtherVariety: false,
      src: null,
    },
    {
      name: "pawmi",
      id: 26,
      isShiny: true,
      isOtherVariety: false,
      src: null,
    },
    {
      name: "pawmo",
      id: 27,
      isShiny: false,
      isOtherVariety: false,
      src: null,
    },
    {
      name: "pawmo",
      id: 28,
      isShiny: true,
      isOtherVariety: false,
      src: null,
    },
    {
      name: "pawmot",
      id: 29,
      isShiny: false,
      isOtherVariety: false,
      src: null,
    },
    {
      name: "pawmot",
      id: 30,
      isShiny: true,
      isOtherVariety: false,
      src: null,
    },
    {
      name: "mimikyu",
      id: 31,
      isShiny: false,
      isOtherVariety: false,
      src: null,
    },
    {
      name: "mimikyu",
      id: 32,
      isShiny: true,
      isOtherVariety: false,
      src: null,
    },
  ]);

  useEffect(() => {
    async function fetchPokemonImg(name, isShiny, isOtherVariety) {
      try {
        const shinyText = isShiny ? "Shiny " : "";
        const alolanText = name === "raichu" && isOtherVariety ? "Alolan " : "";
        const modeText = getModeText(name, isOtherVariety);
        const pokemonImgSrc = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${name}`
        )
          .then((response) => response.json())
          .then((data) => {
            return !isOtherVariety
              ? data["varieties"]["0"]["pokemon"]["url"]
              : data["varieties"]["1"]["pokemon"]["url"];
          })
          .then(
            async (data) =>
              await fetch(data)
                .then((response) => response.json())
                .then((data) => {
                  return !isShiny
                    ? data["sprites"]["other"]["official-artwork"][
                        "front_default"
                      ]
                    : data["sprites"]["other"]["official-artwork"][
                        "front_shiny"
                      ];
                })
          );
        localStorage.setItem(
          `${shinyText}${alolanText}${name}${modeText}`,
          pokemonImgSrc
        );
      } catch {
        alert("Pokemon not Found");
      }
    }

    function getModeText(name, isOtherVariety) {
      if (name === "morpeko") {
        if (isOtherVariety) {
          return " (Hangry Mode)";
        }
        return " (Full Belly Mode)";
      }
      return "";
    }

    function addPokemonSrc(pokemon) {
      const shinyText = pokemon.isShiny ? "Shiny " : "";
      const alolanText =
        pokemon.name === "raichu" && pokemon.isOtherVariety ? "Alolan " : "";
      const modeText = getModeText(pokemon.name, pokemon.isOtherVariety);
      if (
        localStorage.getItem(
          `${shinyText}${alolanText}${pokemon.name}${modeText}`
        ) === null
      ) {
        fetchPokemonImg(pokemon.name, pokemon.isShiny, pokemon.isOtherVariety);
      }

      pokemon.src = localStorage.getItem(
        `${shinyText}${alolanText}${pokemon.name}${modeText}`
      );
    }

    function areSame(arr1, arr2) {
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i].src !== arr2[i].src) {
          return false;
        }
        return true;
      }
    }

    const copy = JSON.parse(JSON.stringify(pokemonList));
    copy.forEach((pokemon) => {
      addPokemonSrc(pokemon);
    });

    if (!areSame(copy, pokemonList)) {
      setPokemonList(copy);
    }
  }, [pokemonList]);

  const scoreText = score.length < 32 ? score.length : `${score.length} (max)`;
  return (
    <>
      <Top score={scoreText} highScore={highScore} />
      <Main
        pokemonList={pokemonList}
        setPokemonList={setPokemonList}
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
      />
    </>
  );
}

export default App;
