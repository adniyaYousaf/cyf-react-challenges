const PlayerScore = ({ score }) =>
  score.map((score) => (
    <tr key={score.n}>
      <td>{score.n}</td>
      <td>{score.s}</td>
    </tr>
  ));

export default PlayerScore;
