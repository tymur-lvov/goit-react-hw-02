function Feedback({ state, totalFeedback }) {
  const { good, neutral, bad } = state;
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {Math.round((good / totalFeedback) * 100)}%</li>
    </ul>
  );
}

export default Feedback;
