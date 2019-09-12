import React, { Fragment } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../Reflex.svg";
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
import { CartContext } from "../context/cart/CartContext";
//counter

class Header extends React.Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div className="headerCont">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white"
              }}
            >
              <Logo height="100px" width="200px" fill="black" />
              {/* for full screen
              <Logo height="209" width="478px" fill="black" />*/}
            </Link>

            <header>
              {/*Links*/}
              <nav className="headerLink">
                <div>
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "black"
                    }}
                  >
                    Home
                  </Link>
                </div>
                <div>
                  <Link
                    to="/Shop"
                    style={{
                      textDecoration: "none",
                      color: "black"
                    }}
                  >
                    Shop
                  </Link>
                </div>
                <div>
                  <Link
                    to="/Projects"
                    style={{
                      textDecoration: "none",
                      color: "black"
                    }}
                  >
                    ??????
                  </Link>
                </div>
                <div>
                  <Link
                    to="/FAQ"
                    style={{
                      textDecoration: "none",
                      color: "black"
                    }}
                  >
                    FAQ
                  </Link>
                </div>
                <div>
                  {/*social & cart*/}
                  <a href="https://twitter.com/illreflex">
                    <i class="fab fa-twitter" />
                  </a>
                  <a href="https://instagram.com/illreflex">
                    <i class="fab fa-instagram" />
                  </a>
                </div>
                <div>
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
                </div>
                <div>
                  <Link
                    to="/Login"
                    style={{
                      textDecoration: "none",
                      color: "black"
                    }}
                  >
                    Login
                  </Link>
                </div>
              </nav>
            </header>
          </div>
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
