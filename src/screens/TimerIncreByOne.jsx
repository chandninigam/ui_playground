import { useEffect, useState } from "react";
import "../styles/timer-incre-by-one.css";

export function TimerIncrementByOne() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [count]);

  function getHourMinSec() {
    const hh =
      Math.floor(count / 3600) < 9
        ? `0${Math.floor(count / 3600)}`
        : `${Math.floor(count / 3600)}`;
    const min =
      Math.floor((count % 3600) / 60) < 9
        ? `0${Math.floor((count % 3600) / 60)}`
        : ` ${Math.floor((count % 3600) / 60)}`;
    const ss =
      Math.floor(count % 60) < 9
        ? `0${Math.floor(count % 60)}`
        : `${Math.floor(count % 60)}`;
    return `${hh}:${min}:${ss}`;
  }

  return (
    <div>
      <h1>Timer Increment By One</h1>
      <div>{getHourMinSec()}</div>
    </div>
  );
}
