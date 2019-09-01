import React, { Component, Fragment } from "react";
import "./App.css";

import Page from "./components/Page";
import ContentState from "./context/content/contentState";
{
  /* TO DO
  - reroute cards to store page

  - media queries are needed for polishing
      -header should hide left links and center logo
      with the right hand links
  */
}

class App extends Component {
  render() {
    return (
      <ContentState>
        <Fragment className="BG">
          <Page />
        </Fragment>
      </ContentState>
    );
  }
}
export default App;
