import React, { Fragment } from "react";
import { CartContext } from "../../context/cart/CartContext";
import { Card } from "react-bootstrap";

export default props => (
  <div className="shopCont">
    <Card>
      <div className="shopGrid">
        <CartContext.Consumer>
          {cart => (
            <Fragment>
              <Card className="card" style={{ width: "12rem" }}>
                <Card.Body>
                  <Card.Title>
                    {cart.items.map(content => (
                      <h4>{content.contents.name}</h4>
                    ))}
                  </Card.Title>
                  <Card.Subtitle>
                    {cart.items.map(content => (
                      <p>{content.contents.colour}</p>
                    ))}
                  </Card.Subtitle>
                  <Card.Subtitle>
                    {cart.items.map(content => (
                      <p>$ {content.contents.price}</p>
                    ))}
                  </Card.Subtitle>
                  <Card.Text>
                    {cart.items.map(content => (
                      <p>{content.contents.size}</p>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Fragment>
          )}
        </CartContext.Consumer>
      </div>
    </Card>
  </div>
);
