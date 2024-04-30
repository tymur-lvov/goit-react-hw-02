function Feedback({ state, totalFeedback, positivePercentage }) {
  const { good, neutral, bad } = state;
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positivePercentage}%</li>
    </ul>
  );
}

export default Feedback;
