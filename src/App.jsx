import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Home } from "./screens/Home";
import { ScrollVisibiltyDetect } from "./screens/ScrollVisibilityDetect";
import { EndlessScroll } from "./screens/EndlessScroll";
import { VisibleItem } from "./screens/IntersectionObserver";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/scroll_visibility"
            element={<ScrollVisibiltyDetect />}
          />
          <Route path="/endless_scroll" element={<EndlessScroll />} />
          <Route path="/intersection_observer" element={<VisibleItem />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
