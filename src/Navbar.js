import React from "react";
import { Link } from "react-router-dom";
import navbarLocales from "./locales.navbar.json";

const Navbar = props => {
  const lang = localStorage.getItem("lang");

  return (
    <nav>
      <Link to="/">{navbarLocales.homepage[lang]}</Link>
      <Link to="/map">{navbarLocales.map[lang]}</Link>
      <Link to="/">{navbarLocales.login[lang]}</Link>
      <Link to="/">{navbarLocales.signup[lang]}</Link>
    </nav>
  );
};

export default Navbar;
