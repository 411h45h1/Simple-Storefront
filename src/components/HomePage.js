import React from "react";
import { Card } from "react-bootstrap";

class HomePage extends React.Component {
  render() {
    return (
      <div className="homeCont">
        <Card>
          <div className="homeGrid">
            <h1>Home</h1>
            <p>test</p>
          </div>
        </Card>
      </div>
    );
  }
}

export default HomePage;
