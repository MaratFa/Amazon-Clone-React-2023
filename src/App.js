import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./components/Checkout.js";
import HomeMain from "./components/HomeMain.js";

function App() {
  return (
    // Bem
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<HomeMain />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
