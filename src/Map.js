import React from "react";

import mapLocales from "./locales.map.json";

const Map = () => {
  const lang = localStorage.getItem("lang");
  return (
    <div>
      <h1>{mapLocales.title[lang]}</h1>
    </div>
  );
};

export default Map;
