import React, { Component, Fragment } from "react";
import "./App.css";

import Page from "./components/Page";
import ContentState from "./context/content/contentState";

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
