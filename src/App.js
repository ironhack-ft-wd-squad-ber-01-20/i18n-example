import React, { Component } from "react";
import "./App.css";

// import locales from "./locales.json";
import navbarLocales from "./locales.navbar.json";

const Navbar = props => {
  console.log(props.lang);
  return (
    <nav>
      <a>{navbarLocales.homepage[props.lang]}</a>
      <a>{navbarLocales.login[props.lang]}</a>
      <a>{navbarLocales.signup[props.lang]}</a>
    </nav>
  );
};

export default class App extends Component {
  state = {
    lang: "de"
  };

  changeLang = () => {
    if (this.state.lang === "de") {
      this.setState({
        lang: "en"
      });
    } else if (this.state.lang === "en") {
      this.setState({
        lang: "de"
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Navbar lang={this.state.lang} />
        <button onClick={this.changeLang}>change lang</button>
      </div>
    );
  }
}
