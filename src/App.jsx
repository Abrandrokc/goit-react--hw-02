import { useState, useEffect } from 'react'
import  Descriptions from "./components/descriptions/descriptions"
import Options from "./components/options/options"
import Feedback from './components/feedback/feedback'
import Notifications from './components/notifications/notifications'

function App() {
  const getInitialClicks = () => {
  const savedClicks = localStorage.getItem("countClick");
  return savedClicks !== null ? JSON.parse(savedClicks) : {
        good: 0,
        neutral: 0,
        bad: 0
      };
};
  const [clicks, setClicks] = useState(
     getInitialClicks
  );
 

  const updateFeedback = (feedbackType) => {
    setClicks( ({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1
 
    }));
  }
  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
   const resetFeedback = () => {
         setClicks({
    good: 0,
    neutral: 0,
    bad: 0
  });
   };
  useEffect(() => { localStorage.setItem("countClick", JSON.stringify( clicks )) }, [clicks])
  
  return <>
    <Descriptions />
    <Options options={clicks} change={updateFeedback} total={totalFeedback} reset={ resetFeedback} />
    {totalFeedback > 0 ? < Feedback options = {clicks} /> : < Notifications />  }
  </>
  

}

export default App
