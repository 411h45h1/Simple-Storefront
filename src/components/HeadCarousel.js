import React from "react";
import Carousel from "react-bootstrap/Carousel";

function HeadCarousel() {
  return (
    <Carousel className="HeadCarousel">
      <Carousel.Item>
        <img
          className="pic1"
          src="https://picsum.photos/2560/150"
          alt="First slide"
        />
        <Carousel.Caption className="PicWords">
          <h3>Reflex</h3>
          <p>Screen 1</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="pic2"
          src="https://picsum.photos/2560/150"
          alt="Third slide"
        />

        <Carousel.Caption className="PicWords">
          <h3>Reflex</h3>
          <p>Screen 2</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="pic3"
          src="https://picsum.photos/2560/150"
          alt="Third slide"
        />

        <Carousel.Caption className="PicWords">
          <h3>Reflex</h3>
          <p>Screen 3</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeadCarousel;
