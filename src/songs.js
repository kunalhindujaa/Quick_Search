import React from "react";
//import ReactDOM from "react-dom";

import "./styles.css";

export default function Songs() {
  return (
    <div className="tvSeries">
      <a className="tvSeries-content" href="songs.html">
        Songs
      </a>
      <p style={{ padding: "5px", fontSize: "16px" }}>
        Read reviews <br /> and <br /> more about your favorite Songs
      </p>
    </div>
  );
}
