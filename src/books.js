import React from "react";
//import ReactDOM from "react-dom";

import "./styles.css";

export default function Books() {
  return (
    <div className="tvSeries">
      <a className="tvSeries-content" href="books.html">
        Books
      </a>
      <p style={{ padding: "5px", fontSize: "16px" }}>
        Read reviews <br /> and <br /> more about your favorite Books
      </p>
    </div>
  );
}
