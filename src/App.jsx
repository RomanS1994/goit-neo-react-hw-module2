import { useState, useEffect } from 'react';

import './App.css';
import Description from './components/Description/description';
import Options from './components/Options/options';
import Feedback from './components/Feedback/feedback';
import Notification from './components/Notification/Notification';

function App() {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = localStorage.getItem('feedback');
    return savedClicks
      ? JSON.parse(savedClicks)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(clicks));
  }, [clicks]);

  const resetFeedback = () => {
    setClicks({ good: 0, neutral: 0, bad: 0 });
  };

  const updateFeedback = feedbackType => {
    setClicks(prevClicks => ({
      ...prevClicks,
      [feedbackType]: prevClicks[feedbackType] + 1,
    }));
  };
  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const positiveFeedback = Math.round((clicks.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {!totalFeedback ? (
        <Notification />
      ) : (
        <Feedback
          good={clicks.good}
          neutral={clicks.neutral}
          bad={clicks.bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </>
  );
}

export default App;
