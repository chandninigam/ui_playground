import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Home } from "./screens/Home";
import { ScrollVisibiltyDetect } from "./screens/ScrollVisibilityDetect";

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
