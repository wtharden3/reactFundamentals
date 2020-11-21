import React, { useState, useEffect } from 'react';

const TimerApp = () => {
  const [secsElapsed, setSecsElapsed] = useState(0);

  const tick = () => {
    setSecsElapsed(secsElapsed + 1);
  };

  useEffect(() => {
    let secInterval = setInterval(() => tick(), 1000);
    
    return () => {
      clearInterval(secInterval);
    };
  });

  return (
    <div>
      <h1 className="section-title">React Timer</h1>
      <div>Seconds Elapsed: {secsElapsed}</div>
    </div>
  );
};

export default TimerApp;
