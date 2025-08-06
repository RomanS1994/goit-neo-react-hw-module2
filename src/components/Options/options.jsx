export default function Options({
  updateFeedback,
  totalFeedback,
  resetFeedback,
}) {
  return (
    <ul>
      <li>
        <button onClick={() => updateFeedback('good')}>Good</button>
      </li>
      <li>
        <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      </li>
      <li>
        <button onClick={() => updateFeedback('bad')}>Bad</button>
      </li>
      <li>
        {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
      </li>
    </ul>
  );
}
