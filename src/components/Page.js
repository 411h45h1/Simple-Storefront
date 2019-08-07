import React from "react";
import "../App.css";
import Header from "./Header";
import HomePage from "./HomePage";
import { Card } from "react-bootstrap";

export default class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showItem: true
    };
    this.toggleHidden = this.toggleHidden.bind(this);
  }

  toggleHidden() {
    this.setState({
      showItem: false
    });
  }

  render() {
    return (
      <div className="app">
        <div>
          <Header hide={this.toggleHidden} />
          {this.state.showItem ? <HomePage /> : null}
          <Card className="footer">
            <p id="footerP">&copy;Reflex • ALL RIGHTS RESERVED</p>
          </Card>
        </div>
      </div>
    );
  }
}
