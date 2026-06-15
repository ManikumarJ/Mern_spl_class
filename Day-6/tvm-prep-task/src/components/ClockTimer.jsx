import React, { useState, useEffect, useRef } from "react";

const ClockTimer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const clock = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(clock);
  }, []);

  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  const start = () => {
    if (!running) {
      setRunning(true);
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
  };

  const stop = () => {
    setRunning(false);
    clearInterval(intervalRef.current);
  };

  const reset = () => {
    setRunning(false);
    clearInterval(intervalRef.current);
    setSeconds(0);
  };

  const resume = () => {
    if (!running) {
      start();
    }
  };

  const formatTime = (sec) => {
    const min = Math.floor(sec / 60);
    const remSec = sec % 60;
    return `${String(min).padStart(2, "0")}:${String(remSec).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <>
      <h1>⏰ Digital Clock & Stopwatch</h1>

      {/* DIGITAL CLOCK */}
      <h2>Current Time: {time.toLocaleTimeString()}</h2>

      <hr />

      {/* STOPWATCH */}
      <h2>Stopwatch: {formatTime(seconds)}</h2>

      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={resume}>Resume</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default ClockTimer;