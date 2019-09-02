import React from "react";
import { Jumbotron, Button, ButtonToolbar, ButtonGroup } from "react-bootstrap";

class Projects extends React.Component {
  render() {
    return (
      <div className="projects">
        <div>
          <Jumbotron className="jumbotron">
            <h1>Podcast</h1>
            <p>Description of Podcast</p>

            <Button variant="outline-dark">Link to podcast</Button>
          </Jumbotron>
        </div>
        <div>
          <Jumbotron className="jumbotron">
            <h1>Music</h1>
            <p>Description of Music</p>

            <Button variant="outline-dark">Link to Music</Button>
          </Jumbotron>
        </div>
        <div>
          <Jumbotron className="jumbotron">
            <h1>Download our App</h1>
            <p>Available on IOS and Android</p>
            <ButtonToolbar>
              <ButtonGroup className="buttonGroup">
                <Button variant="outline-dark">IOS</Button>
                <Button variant="outline-dark">Android</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default Projects;
