import React, { Component, Fragment } from "react";
import "./App.css";

import Page from "./components/Page";
import ContentState from "./context/content/contentState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";

class App extends Component {
  render() {
    return (
      <AuthState>
        <ContentState>
          <AlertState>
            <Fragment className="BG">
              <Page />
            </Fragment>
          </AlertState>
        </ContentState>
      </AuthState>
    );
  }
}
export default App;
