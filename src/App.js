import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import {BrouserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // Bem
    <Router>
      <div className="App">
        <Switch>
          <Header />
          <Home />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
