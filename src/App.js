import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
{
  /* TO DO
  - reroute cards to store page
  - make header look centered
  - create ABOUT, PODCAST & CART
      -route everything after
  - make footer useful with contact N'ting
  - media queries are needed for polishing
      -header should hide left links and center logo
      with the right hand links
  */
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="AppHolder">
          <Header />
        </div>
      </div>
    );
  }
}
export default App;
