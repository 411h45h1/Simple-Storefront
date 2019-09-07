//provides structure for data from databse
import React, { Fragment } from "react";
import { Card, Button } from "react-bootstrap";

import PropTypes from "prop-types";

const ContentItem = ({ content }) => {
  const { id, name, colour, size, quantity } = content;

  return (
    <Fragment>
      <Card className="card" style={{ width: "12rem" }}>
        {/*<Card.Img variant="top" src={props.card.imgUrl} />*/}
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{colour}</Card.Subtitle>
          <Card.Text>{size}</Card.Text>
          <Button>add to cart </Button>
          {/*  <Card.Link href={href}>Card Link</Card.Link>
          <Card.Link href={href}>Another Link</Card.Link> */}
        </Card.Body>
      </Card>
    </Fragment>
  );
};

ContentItem.propTypes = {
  content: PropTypes.object.isRequired
};

export default ContentItem;
