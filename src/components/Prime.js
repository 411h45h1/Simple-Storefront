import React, { Component } from "react";
import { ReactComponent as Logo } from "../Reflex.svg";
import { Route, BrowserRouter, Link, Switch } from "react-router-dom";
import { Button } from "reactstrap";
import StoreList from "./StoreList";
import AboutList from "./AboutList";

export default class Prime extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="prime">
          {/* redo the logo using media queries for full, medium and mobil screens */}
          <Logo height="80px" width="300px" fill="white" />
          <nav className="tabs">
            <Link to="/">
              <Button
                style={{
                  textDecoration: "none",
                  color: "black",
                  margin: "auto",
                  margin: "15px",
                  border: "2px solid",
                  borderRadius: "10px",
                  fontSize: "15px",
                  textAlign: "center"
                }}
              >
                Home
              </Button>
            </Link>

            <Link to="/Shop">
              <Button
                style={{
                  textDecoration: "none",
                  color: "black",
                  margin: "auto",
                  margin: "15px",
                  border: "2px solid",
                  borderRadius: "10px",
                  fontSize: "15px",
                  textAlign: "center"
                }}
              >
                Shop
              </Button>
            </Link>

            <Link to="/About">
              <Button
                style={{
                  textDecoration: "none",
                  color: "black",
                  margin: "auto",
                  margin: "15px",
                  border: "2px solid",
                  borderRadius: "10px",
                  fontSize: "15px",
                  textAlign: "center"
                }}
              >
                About
              </Button>
            </Link>

            <Link to="/Contact">
              <Button
                style={{
                  textDecoration: "none",
                  color: "black",
                  margin: "auto",
                  margin: "15px",
                  border: "2px solid",
                  borderRadius: "10px",
                  fontSize: "15px",
                  textAlign: "center"
                }}
              >
                Contact
              </Button>
            </Link>
          </nav>
        </div>
        <Switch>
          <Route path="/" exact={Prime} />
          <Route path="/Shop" component={StoreList} />
          <Route path="/About" component={AboutList} />
          <Route path="/Contact" component={AboutList} />
        </Switch>
      </BrowserRouter>
    );
  }
}
