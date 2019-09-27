import React from "react";
import {
  Jumbotron,
  Button,
  ButtonToolbar,
  ButtonGroup,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";

class Projects extends React.Component {
  render() {
    return (
      <div className="projects">
        <div>
          <Jumbotron className="jumbotron">
            <h1>Podcast</h1>
            <p>Description of Podcast</p>

            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip>Coming Soon!</Tooltip>}
            >
              <Button variant="outline-dark">Link to podcast</Button>
            </OverlayTrigger>
          </Jumbotron>
        </div>
        <div>
          <Jumbotron className="jumbotron">
            <h1>Music</h1>
            <p>Description of Music</p>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip>Coming Soon!</Tooltip>}
            >
              <Button variant="outline-dark">Link to Music</Button>
            </OverlayTrigger>
          </Jumbotron>
        </div>
        <div>
          <Jumbotron className="jumbotron">
            <h1>Download our App</h1>
            <p>Available on IOS and Android</p>
            <ButtonToolbar>
              <ButtonGroup className="buttonGroup">
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip>Coming Soon!</Tooltip>}
                >
                  <Button variant="outline-dark">IOS</Button>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip>Coming Soon!</Tooltip>}
                >
                  <Button variant="outline-dark">Android</Button>
                </OverlayTrigger>
              </ButtonGroup>
            </ButtonToolbar>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default Projects;
