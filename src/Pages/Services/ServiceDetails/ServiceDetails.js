import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "../ServiceItem/ServiceItem.css";
import Review from "../../Reviews/Review/Review";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import useTitle from "../../../Hooks/useTitle";
const ServiceDetails = () => {
    const {user}=useContext(AuthContext);
  const service = useLoaderData();
  const { image, _id, service_name, description, price, rating } = service;
 useTitle(`${service_name}`);

  return (
    <div className="container ">
      <div className="container bg-light m-5 mx-auto border p-3 ">
        <PhotoProvider>
          <div className="foo text-center my-3">
            <PhotoView src={image}>
              <img src={image} width="80%" height={300} alt="" />
            </PhotoView>
          </div>
        </PhotoProvider>

        <div className="ms-4">
        <h4 className="fs-2 text-primary">{service_name}</h4>
          <p>{description}</p>
          <p >
          Service Fee: <span className="text-success fs-3">{price}</span> Tk{" "}
        </p>
        <p className="text-warning">Ratings: {rating}</p>
        </div>
      </div>
      <div className="container mx-auto review-container m-5">
              <Review service={service} key={_id}>
                  
        </Review>
      </div>
    </div>
  );
};

export default ServiceDetails;
