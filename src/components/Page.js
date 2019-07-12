import React from "react";
import "../App.css";
import Header from "./Header";
import HomePage from "./HomePage";
import Footer from "./Footer";

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
      <div className="App">
        <Header hide={this.toggleHidden} />
        {this.state.showItem ? <HomePage /> : null}
        {/*issue
          if page is refreshed on left links the 
          homePage comp appears  */}

        <Footer />
      </div>
    );
  }
}
