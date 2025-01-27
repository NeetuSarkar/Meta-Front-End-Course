import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./Homepage";
import AboutMe from "./AboutMe";
function App() {
  return (
    <div className="App">
      <nav className="nav">
        <Link to="/" className="nav-item">
          HomePage
        </Link>
        <Link to="/about-me" className="nav-item">
          About Me
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
