import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Home } from "./screens/Home";
import { ScrollVisibiltyDetect } from "./screens/ScrollVisibilityDetect";
import { EndlessScroll } from "./screens/EndlessScroll";

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
