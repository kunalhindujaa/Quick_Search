import React from "react";
//import ReactDOM from "react-dom";

import "./styles.css";

export default function Movies() {
  return (
    <div className="tvSeries">
      <a className="tvSeries-content" href="movies.html">
        Movies
      </a>
      <p style={{ padding: "5px", fontSize: "16px" }}>
        Read reviews <br /> and <br /> more about your favorite Movies
      </p>
    </div>
  );
}
