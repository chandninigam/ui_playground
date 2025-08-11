import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>Welcome to UI Playground</h1>
      <div>
        1.{" "}
        <Link to="/scroll_visibility">Scroll-based Visibility Detection</Link>
      </div>
    </div>
  );
}
