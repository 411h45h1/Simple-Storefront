//provides structure for data from databse
import React, { Fragment } from "react";
import { Card, Button } from "react-bootstrap";
import { CartContext } from "../../context/cart/CartContext";

import PropTypes from "prop-types";

const ContentItem = ({ content }) => {
  const { _id, name, colour, price, size, quantity } = content;
  return (
    <CartContext.Consumer>
      {cart => (
        <Fragment>
          <Card className="card" style={{ width: "12rem" }}>
            {/*<Card.Img variant="top" src={props.card.imgUrl} />*/}
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {colour}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                ${price}
              </Card.Subtitle>
              <Card.Text>{size}</Card.Text>
              <Button onClick={() => cart.addToCart(content)}>
                add to cart
              </Button>

              {/*  <Card.Link href={href}>Card Link</Card.Link>
          <Card.Link href={href}>Another Link</Card.Link> */}
            </Card.Body>
          </Card>
        </Fragment>
      )}
    </CartContext.Consumer>
  );
};

ContentItem.propTypes = {
  content: PropTypes.object.isRequired
};

export default ContentItem;
