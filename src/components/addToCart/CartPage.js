import React from "react";
import { Card } from "react-bootstrap";
import StoreCards from "../Props/StoreCards";
import Error from "../Error";
export default class CartPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      live: false
    };
    this.toggleLive = this.toggleLive.bind(this);
  }

  toggleLive() {
    this.setState({
      live: true
    });
  }

  render() {
    return (
      <div className="cartCont">
        <Card>
          <div className="cartGrid">
            <div>
              {/* the following code before the </div>
                  it checks */}
              {this.state.live ? (
                <StoreCards
                  card={{
                    imgUrl: "https://picsum.photos/500/250",
                    title: "item 1",
                    subTitle: "Subtitle",
                    text: "text",
                    href: "#"
                  }}
                />
              ) : (
                <Error />
              )}
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
