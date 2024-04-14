import { useState, useEffect } from 'react'
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import Options from './components/Options/Options';

function App() {
  const getInitialClicks = () => {
    const savedClicks = localStorage.getItem("countClick");
    return savedClicks !== null ? JSON.parse(savedClicks) : {
      good: 0,
      neutral: 0,
      bad: 0
    };
  };

  const [clicks, setClicks] = useState(getInitialClicks);
 
  const updateFeedback = (feedbackType) => {
    setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1
    });
  };

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const positive = Math.round((clicks.good / totalFeedback) * 100);
  
  const resetFeedback = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  useEffect(() => {
    localStorage.setItem("countClick", JSON.stringify(clicks));
  }, [clicks]);

  return (
    <>
     
      <Description />
      <Options  change={updateFeedback} total={totalFeedback} reset={resetFeedback} />
      {totalFeedback > 0 ? <Feedback options={clicks}  positive={positive} total={totalFeedback}/> : <Notification />}
    </>
  );
}

export default App;
