import { useState, useEffect } from "react";
import "../styles/scroll-visibility-detect.css";

const numberOfDivs = Math.floor(Math.random(1, 20) * 1e2);

export function ScrollVisibiltyDetect() {
  const [visibleDiv, setVisibleDiv] = useState(0);

  function throttle(cb, wait = 1000) {
    let ran = false;
    return function (...agrs) {
      if (!ran) {
        cb.apply(this, agrs);
        ran = true;
        setTimeout(() => {
          ran = false;
        }, wait);
      }
    };
  }

  const throttleFunc = throttle(highlighted, 1000);

  function highlighted() {
    const boxes = document.querySelectorAll(".scrollingDiv");
    let maxVisibleHeight = 0;
    let visibleIndex = 0;

    boxes.forEach((box, index) => {
      const rect = box.getBoundingClientRect();
      const visibleHeight =
        Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

      if (visibleHeight > maxVisibleHeight && visibleHeight > 0) {
        maxVisibleHeight = visibleHeight;
        visibleIndex = index;
      }
    });
    setVisibleDiv(visibleIndex);
  }

  useEffect(() => {
    window.addEventListener("scroll", throttleFunc);

    return () => {
      window.removeEventListener("scroll", throttleFunc);
    };
  }, []);

  return (
    <div
      className="App"
      style={{
        height: `${numberOfDivs * 100}vh`,
      }}
    >
      {Array.from(new Array(numberOfDivs)).map((_, idx) => (
        <div
          key={idx}
          className={`scrollingDiv ${visibleDiv === idx ? "active" : ""}`}
          style={{
            top: `${idx * 100}vh`,
          }}
        >
          div {idx}
        </div>
      ))}
    </div>
  );
}
