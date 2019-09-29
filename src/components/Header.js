import React, { Fragment } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../Reflex.svg";
import Navbar from "react-bootstrap/Navbar";
import HeadCarousel from "./HeadCarousel";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import Projects from "./pages/projects";
import FAQ from "./pages/FAQ";
import HomePage from "./pages/HomePage";

import CartLength from "../context/cart/CartLength";

import Register from "./auth/Register";
import Login from "./auth/Login";
import ContentEdit from "./content/ContentEdit";
import Alerts from "../components/alerts/Alerts";
import { Nav } from "react-bootstrap";
//counter

class Header extends React.Component {
  render() {
    return (
      <Router>
        <Fragment>
          <header>
            <Navbar collapseOnSelect expand="sm" bg="#9C9C9C" variant="light">
              <Navbar.Brand>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "white"
                  }}
                >
                  <Logo height="100px" width="200px" fill="black" />
                </Link>
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  {/*Links*/}
                  <Nav.Link>
                    <Link
                      to="/"
                      style={{
                        textDecoration: "none",
                        color: "black"
                      }}
                    >
                      Home
                    </Link>
                  </Nav.Link>

                  <Nav.Link>
                    <Link
                      to="/Shop"
                      style={{
                        textDecoration: "none",
                        color: "black"
                      }}
                    >
                      Shop
                    </Link>
                  </Nav.Link>

                  <Nav.Link>
                    <Link
                      to="/Projects"
                      style={{
                        textDecoration: "none",
                        color: "black"
                      }}
                    >
                      ??????
                    </Link>
                  </Nav.Link>

                  <Nav.Link>
                    <Link
                      to="/FAQ"
                      style={{
                        textDecoration: "none",
                        color: "black"
                      }}
                    >
                      FAQ
                    </Link>
                  </Nav.Link>
                </Nav>

                <Nav>
                  <Nav.Link
                    href="https://twitter.com/illreflex"
                    target="_blank"
                  >
                    <i className="fab fa-twitter" />
                  </Nav.Link>
                  <Nav.Link
                    href="https://instagram.com/illreflex"
                    target="_blank"
                  >
                    <i className="fab fa-instagram" />
                  </Nav.Link>
                </Nav>

                <Nav>
                  <Nav.Link>
                    <Link
                      to="/Cart"
                      style={{
                        textDecoration: "none",
                        color: "black"
                      }}
                    >
                      {/*counts number of items added */}
                      cart(
                      <CartLength />)
                    </Link>
                  </Nav.Link>

                  <Nav.Link>
                    <Link
                      to="/Login"
                      style={{
                        textDecoration: "none",
                        color: "black"
                      }}
                    >
                      Login
                    </Link>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </header>

          <HeadCarousel />
          <Alerts />
          <Route Path="/" exact={HomePage} />
          <Route path="/Shop" component={Store} />
          <Route path="/Cart" component={Cart} />
          <Route path="/Projects" component={Projects} />
          <Route path="/FAQ" component={FAQ} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/ContentEdit" component={ContentEdit} />
        </Fragment>
      </Router>
    );
  }
}

export default Header;
