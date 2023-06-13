import { useState, useRef } from 'react';
import './Hooks.css'

export default function Stopwatch() {
  const [startTime, setStartTime] = useState("");
  const [now, setNow] = useState("");
  const intervalRef = useRef("");

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    if(clearInterval(intervalRef.current)){
      intervalRef.current.style.color="red"
    }
    
    }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
    <center>
      <h1 ref={intervalRef} >Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>
        Start
      </button>
      <button onClick={handleStop}>
        Stop
      </button></center>
    </>
  );
}
