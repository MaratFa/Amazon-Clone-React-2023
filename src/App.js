import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";

function App() {
  return (
    // Bem
    <Router>
      <div className="App">
        <Header />
        <Home />
        <Routes>
          <Route path="/checkout" element={<h1>fffffff</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
