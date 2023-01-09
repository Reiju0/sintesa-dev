import React, { Component } from "react";
import { BrowserRouter as Routes, Route, Link } from "react-router-dom";
import Home from "./views/templates/Home";
import Footer from "./views/templates/Footer";

//import style + assets
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./assets/style/Style.css";

class App extends Component {
  render() {
    return <Home />;
  }
}

export default App;
