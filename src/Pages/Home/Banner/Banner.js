import React from "react";
import logo from "../../../Assets/images/logo.jpg";
import Carousel from "react-bootstrap/Carousel";
const Banner = () => {
  return (
    <Carousel className="container ">
      <Carousel.Item>
        <img className="d-block w-100 h-50"  src="https://media-cdn.tripadvisor.com/media/photo-s/12/9b/09/8a/sundarban-beauty.jpg" alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://i.ytimg.com/vi/gbgBs7dfJ-k/maxresdefault.jpg" alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://www.lrbtravelteam.com/wp-content/uploads/2020/10/Sajek-Valey.png" alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
