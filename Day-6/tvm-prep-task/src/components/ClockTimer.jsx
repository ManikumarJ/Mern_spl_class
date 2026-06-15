import React, { useState } from "react";

const ClockTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [timer, setTimer] = useState(null);

  const start = () => {
    if (timer !== null) return; 

    const id = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    setTimer(id);
  };

  const stop = () => {
    clearInterval(timer);
    setTimer(null);
  };

  const reset = () => {
    clearInterval(timer);
    setTimer(null);
    setSeconds(0);
  };

  const resume = () => {
    if (!timer) {
      start();
    }
  };

  return (
    <div>
      <h1>Stopwatch</h1>

      <h2>{seconds} Seconds</h2>

      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={resume}>Resume</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default ClockTimer;