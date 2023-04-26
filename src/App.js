import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout.js";
import Home from "./Home.js";
import Login from "./Login";

function App() {
  return (
    // Bem
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
