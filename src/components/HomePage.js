import React from "react";
import Deadlift from "../images/deadlift.jpg";
import Football from "../images/football.jpg";
import Bike from "../images/bike.jpg";
import { Card } from "react-bootstrap";

class HomePage extends React.Component {
  render() {
    return (
      <div className="homeCont">
        <Card>
          <div className="homeGrid" />
        </Card>
      </div>
    );
  }
}

export default HomePage;
