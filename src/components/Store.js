import React from "react";
import StoreCards from "./Props/StoreCards";
import { Card } from "react-bootstrap";

class Store extends React.Component {
  render() {
    return (
      <div className="shopCont">
        <Card>
          <div className="shopGrid">
            <div>
              <StoreCards
                card={{
                  imgUrl: "https://picsum.photos/500/250",
                  title: "item 1",
                  subTitle: "Subtitle",
                  text: "text",
                  href: "#"
                }}
              />
            </div>
            <div>
              <StoreCards
                card={{
                  imgUrl: "https://picsum.photos/500/250",
                  title: "item 1",
                  subTitle: "Subtitle",
                  text: "text",
                  href: "#"
                }}
              />
            </div>
            <div>
              <StoreCards
                card={{
                  imgUrl: "https://picsum.photos/500/250",
                  title: "item 1",
                  subTitle: "Subtitle",
                  text: "text",
                  href: "#"
                }}
              />
            </div>
            <div>
              <StoreCards
                card={{
                  imgUrl: "https://picsum.photos/500/250",
                  title: "item 1",
                  subTitle: "Subtitle",
                  text: "text",
                  href: "#"
                }}
              />
            </div>
            <div>
              <StoreCards
                card={{
                  imgUrl: "https://picsum.photos/500/250",
                  title: "item 1",
                  subTitle: "Subtitle",
                  text: "text",
                  href: "#"
                }}
              />
            </div>
            <div>
              <StoreCards
                card={{
                  imgUrl: "https://picsum.photos/500/250",
                  title: "item 1",
                  subTitle: "Subtitle",
                  text: "text",
                  href: "#"
                }}
              />
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
export default Store;
