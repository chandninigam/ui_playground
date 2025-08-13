import { useEffect, useRef } from "react";
import "../styles/intersection-observer.css";

export function VisibleItem() {
  const containeRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      {
        root: containeRef.current,
        threshold: 0.5,
      }
    );

    const children = containeRef.current.querySelectorAll(".child");
    children.forEach((child) => observer.observe(child));

    return () => {
      children.forEach((child) => observer.unobserve(child));
    };
  }, []);

  return (
    <div>
      <h1>Intersection Observer</h1>
      <div ref={containeRef} className="app">
        {Array.from({ length: 15 }, (_, i) => (
          <div key={i} data-id={i} className="child">
            Item {i}
          </div>
        ))}
      </div>
    </div>
  );
}
