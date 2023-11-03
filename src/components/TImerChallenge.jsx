import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

// let timer;

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useRef();

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const handleStart = () => {
    setTimerStarted(true);

    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.showModal();
    }, targetTime * 1000);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
    setTimerStarted(false);
  };

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="Lost" />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 && "s"}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Challenge started!" : "Not started"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
