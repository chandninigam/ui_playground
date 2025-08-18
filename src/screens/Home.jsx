import { Link } from "react-router-dom";
import "../styles/home.css";

export function Home() {
  return (
    <div>
      <h1>Welcome to UI Playground</h1>
      <div className="list_screens">
        <span>
          1.{" "}
          <Link to="/scroll_visibility">Scroll-based Visibility Detection</Link>
        </span>
        <span>
          2. <Link to="/endless_scroll">EndLess Scroll</Link>
        </span>
        <span>
          3. <Link to="/intersection_observer">Intersection Observer</Link>
        </span>
        <span>
          4. <Link to="/accordion">Accordion UI</Link>
        </span>
        <span>
          5. <Link to="/file_explore">File Explore UI</Link>
        </span>
        <span>
          6. <Link to="/timer_increment_by_one">Timer Increment By One</Link>
        </span>
      </div>
    </div>
  );
}
