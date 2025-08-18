import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Home } from "./screens/Home";
import { ScrollVisibiltyDetect } from "./screens/ScrollVisibilityDetect";
import { EndlessScroll } from "./screens/EndlessScroll";
import { VisibleItem } from "./screens/IntersectionObserver";
import { Accordion } from "./screens/Accordion";
import { FileExploreUi } from "./screens/FileExploreUi";
import { TimerIncrementByOne } from "./screens/TimerIncreByOne";

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
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/file_explore" element={<FileExploreUi />} />
          <Route
            path="/timer_increment_by_one"
            element={<TimerIncrementByOne />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
