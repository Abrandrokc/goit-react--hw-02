import { useState, useEffect } from 'react'


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
      <Descriptions />
      <Options  change={updateFeedback} total={totalFeedback} reset={resetFeedback} />
      {totalFeedback > 0 ? <Feedback options={clicks}  positive={positive} total={totalFeedback}/> : <Notifications />}
    </>
  );
}

export default App;
