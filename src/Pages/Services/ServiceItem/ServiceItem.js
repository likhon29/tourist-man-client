import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "./ServiceItem.css";
const ServiceItem = ({ service }) => {
  const { image, _id, service_name, description, price, rating } = service;
  return (
    <div className="container d-flex m-5 border p-3 mx-auto">
      <PhotoProvider>
        <div className="foo">
          <PhotoView src={image}>
            <img src={image} width={500} height={300} alt="" />
          </PhotoView>
        </div>
      </PhotoProvider>

      <div className="ms-4">
        <h4>{service_name}</h4>
        <p>
          {description.length > 50
            ? description.slice(0, 400) + "...."
            : description}{" "}
        </p>
        <p>
          Prize:{price}Tk / <span className="text-warning">person</span>{" "}
        </p>
        <p>Ratings: {rating}</p>
        <Link to={`/service/${_id}`}>
          {" "}
          <Button>View Details</Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceItem;
