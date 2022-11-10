import React from "react";
import logo from "../../../Assets/images/logo.jpg";
import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";
const Banner = () => {
  return (
    <Carousel className="container ">
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src="https://i.ytimg.com/vi/qFJnoxQcH84/maxresdefault.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className=" fs-1">Resort/Hotel Booking Service</h3>
          <p className="text-warning">
            I will provide you a great retail service for booking a resort or
            hotel
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src="https://www.doc.govt.nz/thumbs/hero/contentassets/98da52db98a64d37a1e0dd7799723498/gibbs-hill-track-abel-tasman-1920.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className=" fs-1">Hill Tracking Guide Service</h3>
          <p className="text-warning">
            I will provide you a great guiding service for Hill Tracking
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ytimg.com/vi/gbgBs7dfJ-k/maxresdefault.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className=" fs-1">Hire a Tour Guide</h3>
          <p className="text-warning">
            I will provide as a tour guide service for any tourist place
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://content3.jdmagicbox.com/comp/def_content/car_hire/default-car-hire-19.jpg?clr=3f6600"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className=" fs-1">Rent a Taxi/Car for small Tourist Group</h3>
          <p className="text-warning">
            I will provide Car or Taxi Rent retailer service for any tourist
            place
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
