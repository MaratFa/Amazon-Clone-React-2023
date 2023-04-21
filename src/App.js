import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.js";
import Home from "./components/Home.js";

function App() {
  return (
    // Bem
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/pages" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
