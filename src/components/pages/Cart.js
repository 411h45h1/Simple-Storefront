import React, { Fragment, Component } from "react";
import { CartContext } from "../../context/cart/CartContext";
import { Card, Button } from "react-bootstrap";
import { observer } from "mobx-react";

const Cart = observer(
  class Cart extends Component {
    render() {
      return (
        <Fragment>
          <CartContext.Consumer>
            {cart => (
              <div className="shopCont">
                <Card>
                  <h2>
                    Cart Total: $
                    {cart.items.reduce(
                      (acc, curr) => acc + curr.contents.price,
                      0
                    )}
                  </h2>

                  <div className="shopGrid">
                    {cart.items.map(content => (
                      <CartItem key={content.contents._id} content={content} />
                    ))}
                  </div>
                </Card>
              </div>
            )}
          </CartContext.Consumer>
        </Fragment>
      );
    }
  }
);
//provides the format for all items in cart
const CartItem = observer(({ content }) => {
  const { _id, name, colour, price, size } = content.contents;
  return (
    <CartContext.Consumer>
      {cart => (
        <Card className="card" style={{ width: "12rem" }}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{colour}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">${price}</Card.Subtitle>
            <Card.Text>Size: {size}</Card.Text>
            <Button
              variant="danger"
              onClick={() => cart.removeFromCart(content)}
            >
              Remove
            </Button>
          </Card.Body>
        </Card>
      )}
    </CartContext.Consumer>
  );
});

export default Cart;
