import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./modules/Home";
import News from "./modules/News";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
