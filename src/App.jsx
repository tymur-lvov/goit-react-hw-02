import { useEffect, useState } from "react";

import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

function App() {
  const feedbackDefault = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [state, setState] = useState(() => {
    const savedState = localStorage.getItem("feedbackState");
    if (savedState !== 0) {
      return JSON.parse(savedState);
    }
    return feedbackDefault;
  });

  useEffect(() => {
    localStorage.setItem("feedbackState", JSON.stringify(state));
  });

  const totalFeedback = state.good + state.neutral + state.bad;

  const updateFeedback = (feedbackType) => {
    setState((prevState) => ({
      ...prevState,
      [feedbackType]: ++prevState[feedbackType],
    }));
  };

  const handleResetClick = () => {
    setState(feedbackDefault);
  };

  return (
    <>
      <Description
        title="Sip Happens Café"
        description="Please leave your feedback about our service by selecting one of the options below."
      />
      <Options
        good="Good"
        neutral="Neutral"
        bad="Bad"
        reset="Reset"
        handleResetClick={handleResetClick}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback ? (
        <Feedback state={state} totalFeedback={totalFeedback} />
      ) : (
        <Notification info="No feedback yet" />
      )}
    </>
  );
}

export default App;
