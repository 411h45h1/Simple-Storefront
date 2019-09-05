import React, { Component, Fragment } from "react";
import "./App.css";

import Page from "./components/Page";
import ContentState from "./context/content/ContentState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

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
