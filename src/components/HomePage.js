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
          <div className="homeGrid">
            <div className="container">
              <img src={Deadlift} />
              <div className="overlay">
                <div className="text">1</div>
              </div>
            </div>
            <div className="container">
              <img src={Football} />
              <div className="overlay">
                <div className="text">2</div>
              </div>
            </div>
            <div className="container">
              <img src={Bike} />
              <div className="overlay">
                <div className="text">3</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default HomePage;
