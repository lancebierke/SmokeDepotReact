import React from "react";
import Navbar from "./Components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Components/Pages/Home";
import Menu from "./Components/Pages/Menu";
import Contact from "./Components/Pages/Contact";
import Where from "./Components/Pages/Where";
import SignUp from "./Components/Pages/SignUp";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/where" component={Where} />
          <Route path="/contact" component={Contact} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
