import React from "react";
//import ReactDOM from "react-dom";

import "./styles.css";

export default function TvSeries() {
  return (
    <div className="tvSeries">
      <a className="tvSeries-content" href="series.html">
        TV Series
      </a>
      <p style={{ padding: "5px", fontSize: "16px" }}>
        Read reviews <br /> and <br /> more about your favorite TV Series
      </p>
    </div>
  );
}
