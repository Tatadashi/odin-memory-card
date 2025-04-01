import "../styles/topSection.css";

export default function Top({ score, highScore }) {
  return (
    <div className="top">
      <div className="topLeft">
        <h1>Pokémon Memory Card</h1>
        <h4>
          Click on unique pokémon to accumulate score. Duplicates will reset
          your progress.
        </h4>
      </div>
      <div className="topRight">
        <h4>Score: {score}</h4>
        <h4>High Score: {highScore}</h4>
      </div>
    </div>
  );
}
