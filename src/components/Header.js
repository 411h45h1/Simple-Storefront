import React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { ReactComponent as Logo } from "../Reflex.svg";
import HeadCarousel from "./HeadCarousel";
import Store from "./Store";
import Podcast from "./Podcast";
import FAQ from "./FAQ";
import HomePage from "./HomePage";
import CartPage from "./addToCart/CartPage";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div className="headerDiv">
          <header className="headerH">
            <div className="headerCont">
              <div className="headerSectionA">
                <nav>
                  <div className="headerLinksA">
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
                    <Link
                      to="/Podcast"
                      style={{
                        textDecoration: "none",
                        color: "black"
                      }}
                      onClick={this.props.hide}
                    >
                      Podcast
                    </Link>
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
                </nav>
              </div>

              <div className="headerSectionB">
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "white"
                  }}
                >
                  <Logo height="80px" width="300px" fill="black" />
                </Link>
              </div>

              <div className="headerSectionC">
                <div className="headerSubSectionC">
                  <nav>
                    <div className="headerLinksC">
                      <a href="https://twitter.com/illreflex">
                        <i class="fab fa-twitter" />
                      </a>
                      <a href="https://instagram.com/illreflex">
                        <i class="fab fa-instagram" />
                      </a>
                    </div>
                  </nav>
                </div>
                <Link
                  to="/Cart"
                  style={{
                    textDecoration: "none",
                    color: "black"
                  }}
                  onClick={this.props.hide}
                >
                  cart (0)
                </Link>
              </div>
            </div>
            <HeadCarousel />
          </header>

          <Route Path="/" exact={HomePage} />
          <Route path="/Shop" component={Store} />
          <Route path="/Podcast" component={Podcast} />
          <Route path="/FAQ" component={FAQ} />
          <Route path="/Cart" component={CartPage} />
        </div>
      </Router>
    );
  }
}

export default Header;
