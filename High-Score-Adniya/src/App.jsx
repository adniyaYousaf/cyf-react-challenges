import { allCountryScores } from "./assets/data/scores.js";
import PlayerScore from "./play.jsx";

import "./App.css";

function App() {
  const allCountry = allCountryScores.map((country) => (
    <table key={country.name}>
      <h1>HIGH SCORES: {country.name}</h1>
      <tbody>
        <PlayerScore key={country} score={country.scores} />
      </tbody>
    </table>
  ));

  return (
    <article>
      <h1>High Scores</h1>
      <ul>{allCountry}</ul>
    </article>
  );
}

export default App;
