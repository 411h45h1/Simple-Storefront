import React, { Component, Fragment } from "react";
import "./App.css";

import Page from "./components/Page";
import ContentState from "./context/content/contentState";
import AuthState from "./context/auth/AuthState";

class App extends Component {
  render() {
    return (
      <AuthState>
        <ContentState>
          <Fragment className="BG">
            <Page />
          </Fragment>
        </ContentState>
      </AuthState>
    );
  }
}
export default App;
