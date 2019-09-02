import React from "react";
import { Card } from "react-bootstrap";

import Contents from "../content/Contents";

class Store extends React.Component {
  render() {
    return (
      <div className="shopCont">
        <Card>
          <div className="shopGrid">
            <Contents />
          </div>
        </Card>
      </div>
    );
  }
}
export default Store;
