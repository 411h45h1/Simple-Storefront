import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../Reflex.svg";
import HeadCarousel from "./HeadCarousel";
import Store from "./Store";
import Projects from "./projects";
import FAQ from "./FAQ";
import Login from "./Login";
import HomePage from "./HomePage";
import CartPage from "./addToCart/CartPage";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  activeLink() {
    this.setState({
      showItem: false
    });
  }
  render() {
    return (
      <Router>
        <div>
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
                    onClick={this.props.hide}
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
                    onClick={this.props.hide}
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
                    onClick={this.props.hide}
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
                    onClick={this.props.hide}
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
                    onClick={this.props.hide}
                  >
                    cart(0)
                  </Link>
                </div>
                <div>
                  <Link
                    to="/Login"
                    style={{
                      textDecoration: "none",
                      color: "black"
                    }}
                    onClick={this.props.hide}
                  >
                    Login
                  </Link>
                </div>
              </nav>
            </header>
          </div>
          <HeadCarousel />

          <Route Path="/" exact={HomePage} />
          <Route path="/Shop" component={Store} />
          <Route path="/Projects" component={Projects} />
          <Route path="/FAQ" component={FAQ} />
          <Route path="/Cart" component={CartPage} />
          <Route path="/Login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default Header;
