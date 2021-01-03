import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/template/Nav";
import Footer from "./components/template/Footer";
import './App.css';
import React, {lazy, Suspense} from "react";

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Projects = lazy(() => import("./components/Projects"));
const Resume = lazy(() => import("./components/Resume"));
const Home = lazy(() => import("./components/Home"));

function App() {
  return (
    <Router basename="myprofile">
      <div className="App">
        <Nav />
        <div className="contents">
          <div className="footer-container"><Footer /></div>
          <div className="main">
            <Suspense fallback={<p>Loading...</p>}>
              <Switch>
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
                <Route path="/resume" component={Resume} />
                <Route path="/" component={Home} />
              </Switch>
            </Suspense>
          </div>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
