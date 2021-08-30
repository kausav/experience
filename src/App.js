import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Resume from "./components/pages/Resume";
import Skills from "./components/pages/Skills";
import Contact from "./components/pages/Contact";
import Experience from "./components/pages/Experience";
import Projects from "./components/pages/Projects";
// import { sliderData } from "./components/SliderData";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
              <Route path="/" exact component={Home} />
        </Switch>
        <Switch>
          <Route path="/about" exact component={About} />
        </Switch>
        <Switch>
          <Route path="/skills" exact component={Skills} />
        </Switch>
        <Switch>
          <Route path="/projects" exact component={Projects} />
        </Switch>
        <Switch>
          <Route path="/experience" exact component={Experience} />
        </Switch>
        <Switch>
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Switch>
          <Route path="/resume" exact component={Resume} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
