import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

class Podcast extends React.Component {
  render() {
    return (
      <div className="bodyCont">
        <Jumbotron className="jumbotron">
          <h1>Podcast</h1>
          <p>Description of Podcast</p>

          <Button variant="primary">Link to podcast</Button>
        </Jumbotron>
      </div>
    );
  }
}

export default Podcast;
