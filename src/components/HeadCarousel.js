import React from "react";
import Carousel from "react-bootstrap/Carousel";

function HeadCarousel() {
  return (
    <Carousel className="HeadCarousel">
      <Carousel.Item>
        <img
          className="pic1"
          src="https://picsum.photos/1400/150"
          alt="First slide"
        />
        <Carousel.Caption className="PicWords">
          <h3>Reflex</h3>
          <p>woop</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="pic2"
          src="https://picsum.photos/1400/150"
          alt="Third slide"
        />

        <Carousel.Caption className="PicWords">
          <h3>Reflex</h3>
          <p>dee</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="pic3"
          src="https://picsum.photos/1400/150"
          alt="Third slide"
        />

        <Carousel.Caption className="PicWords">
          <h3>Reflex</h3>
          <p>scoop</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeadCarousel;
