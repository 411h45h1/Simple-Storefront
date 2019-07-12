import React from "react";
import "../App.css";
import Header from "./Header";
import HomePage from "./HomePage";
import Footer from "./Footer";

export default class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showItem: false
    };
    this.toggleHidden = this.toggleHidden.bind(this);
  }

  toggleHidden() {
    this.setState({
      showItem: true
    });
  }

  render() {
    return (
      <div className="App">
        <Header hide={this.toggleHidden} />
        {this.state.showItem ? null : <HomePage />}
        <Footer />
      </div>
    );
  }
}
