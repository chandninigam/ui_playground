import { useEffect, useState, useRef } from "react";
import "../styles/endless-scroll.css";

export function EndlessScroll() {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const scrollRef = useRef();

  function onScroll(e) {
    const event = e.target;

    if (event.scrollHeight - event.scrollTop <= event.clientHeight) {
      const arr = [];
      const currentArrlength = data.length;
      console.log("cureentLength", currentArrlength);
      for (let i = 1; i <= 10; i++) {
        arr.push(currentArrlength + i);
      }

      setData((prev) => [...prev, ...arr]);
    }
  }

  useEffect(() => {
    const ele = scrollRef.current;

    if (!ele) return;

    ele.addEventListener("scroll", onScroll);

    return () => ele.removeEventListener("scroll", onScroll);
  }, [data]);

  return (
    <div>
      <h1>Endless Scroll</h1>
      <div className="list" ref={scrollRef}>
        {data.map((ele) => {
          return (
            <div key={`Ele${ele}`} className="singleItem">
              {ele}
            </div>
          );
        })}
      </div>
    </div>
  );
}
