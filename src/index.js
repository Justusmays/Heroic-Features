import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Nav } from "./nav";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";
import { Footer } from "./footer";

function App() {
  return (
    <div>
      <Nav />
      <div className="container">
        <Jumbotron />
        <div className="row">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
