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
      </div>
    </div>
  );
}
