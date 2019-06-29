import React from "react";
import { Card } from "react-bootstrap";

function StoreCards(props) {
  return (
    <div>
      <Card className="card" style={{ width: "12rem" }}>
        <Card.Img variant="top" src={props.card.imgUrl} />
        <Card.Body>
          <Card.Title>{props.card.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.card.subTitle}
          </Card.Subtitle>
          <Card.Text>{props.card.text}</Card.Text>
          <Card.Link href={props.card.href}>Card Link</Card.Link>
          <Card.Link href={props.card.href}>Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default StoreCards;
