import React, { Component } from "react";
import "./App.css";

import { Route } from "react-router-dom";

// import locales from "./locales.json";

import Map from "./Map";
import Navbar from "./Navbar";

export default class App extends Component {
  changeLang = () => {
    const lang = localStorage.getItem("lang");
    if (lang === "de") {
      localStorage.setItem("lang", "en");
    } else if (lang === "en") {
      localStorage.setItem("lang", "de");
    }
    this.forceUpdate(); // to force re-rendering the component
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <button onClick={this.changeLang}>change lang</button>
        <Route path="/map" component={Map} />
      </div>
    );
  }
}
