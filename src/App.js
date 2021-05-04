import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navbar";
// import HomePage from "./components/Homepage";

function App() {
  return (
    <div className="app">
      <header>
        <Navigation />
      </header>
      <main>
        <Switch>
          {/* <Route path="/" component={HomePage} exact /> */}
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
