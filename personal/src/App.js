import React from'react';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home";
import Personal from "./Components/Pages/Personal";
import Professional from "./Components/Pages/Professional";
import Contact from "./Components/Pages/Contact";
import Particles from "react-particles-js";

function App() {
  return (
    <>
      <Router>
        <Navbar />        
        <Switch>          
          <Route path="/" exact component={Home} />
          <Route path="/personal" exact component={Personal} />
          <Route path="/professional" exact component={Professional} />
          <Route path="/contact-me" exact component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
