import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "../ServiceItem/ServiceItem.css";
import Review from "../../Reviews/Review/Review";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
const ServiceDetails = () => {
    const {user}=useContext(AuthContext);
  const service = useLoaderData();
  const { image, _id, service_name, description, price, rating } = service;
  return (
    <div className="container">
      <div className="container  m-5 border p-3">
        <PhotoProvider>
          <div className="foo text-center my-3">
            <PhotoView src={image}>
              <img src={image} width="60%" height={300} alt="" />
            </PhotoView>
          </div>
        </PhotoProvider>

        <div className="ms-4">
          <h4>{service_name}</h4>
          <p>{description}</p>
          <p>
            Prize:{price}Tk / <span className="text-warning">person</span>{" "}
          </p>
          <p>Ratings: {rating}</p>
        </div>
      </div>
      <div className="container review-container m-5">
              <Review service={service} key={_id}>
                  
        </Review>
      </div>
    </div>
  );
};

export default ServiceDetails;
