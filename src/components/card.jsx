import "../styles/card.css";

export default function Card({
  id,
  tabIndex,
  pokemonList,
  setPokemonList,
  score,
  setScore,
  highScore,
  setHighScore,
  name,
  src,
}) {
  const addScoreOnClick = () => {
    shufflePokemonList();

    if (!score.includes(id)) {
      const copy = JSON.parse(JSON.stringify(score));
      copy.push(id);
      setScore(copy);
    } else {
      if (score.length == 32) {
        setHighScore(`${score.length} (max)`);
      } else if (score.length > highScore) {
        setHighScore(score.length);
      }
      setScore([]);
    }
  };

  function shufflePokemonList() {
    let currIndex = pokemonList.length;
    const copy = JSON.parse(JSON.stringify(pokemonList));

    while (currIndex != 0) {
      let randIndex = Math.floor(Math.random() * currIndex);
      currIndex--;

      [copy[currIndex], copy[randIndex]] = [copy[randIndex], copy[currIndex]];
    }

    setPokemonList(copy);
  }

  const keyPressed = (e) => {
    if (e.key === " " || e.key === "Enter") {
      document.activeElement.blur();
      addScoreOnClick();
    }
  };
  return (
    <div
      className="card"
      onClick={addScoreOnClick}
      onKeyDown={(e) => {
        keyPressed(e);
      }}
      tabIndex={tabIndex}
    >
      <img src={src} alt={name} />
      <h3>{name}</h3>
    </div>
  );
}
