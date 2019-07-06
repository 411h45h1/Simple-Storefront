import React, { Component } from "react";
import "../App.css";
import Header from "./Header";
import HomePage from "./HomePage";
import Footer from "./Footer";

class Page extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HomePage />
        <Footer />
      </div>
    );
  }
}
export default Page;
