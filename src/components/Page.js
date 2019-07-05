import React, { Component } from "react";
import "../App.css";
import Header from "./Header";
import HomePage from "./HomePage";

class Page extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HomePage />
      </div>
    );
  }
}
export default Page;
