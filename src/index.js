import React from "react";
import ReactDOM from "react-dom";
import TvSeries from "./tvSeries.js";
import Movies from "./movies.js";
import Books from "./books.js";
import Songs from "./songs.js";
import "./styles.css";

function App() {
  return (
    <div>
      <div className="title">
        <h1 className="title-content">Quick Search </h1>
      </div>
      <br />
      <br />
      <br />

      <TvSeries />
      <Movies />

      <br />
      <br />
      <br />

      <Books />
      <Songs />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
