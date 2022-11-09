import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ServiceItem from "../ServiceItem/ServiceItem";
import Spinner from "react-bootstrap/Spinner";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import useTitle from "../../../Hooks/useTitle";
const AllServices = () => {
  const [allServices, setAllServices] = useState([]);
  const { loading, setLoading } = useContext(AuthContext);
  useEffect(() => {
    fetch("http://localhost:5000/allServices")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setAllServices(data);
      });
  }, [allServices, setLoading]);

  useTitle("ALl Service");
  return (
    <div>
      {loading ? (
        <div id="loader" className="d-flex justify-content-center ">
          <Spinner className="text-center" animation="border" variant="info" />
        </div>
      ) : (
        <>
          {" "}
          {allServices.map((service) => (
            <ServiceItem service={service} key={service._id}></ServiceItem>
          ))}
        </>
      )}
    </div>
  );
};

export default AllServices;
