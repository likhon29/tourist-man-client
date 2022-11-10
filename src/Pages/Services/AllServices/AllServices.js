import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ServiceItem from "../ServiceItem/ServiceItem";
import Spinner from "react-bootstrap/Spinner";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import useTitle from "../../../Hooks/useTitle";
import LoaderSpinner from "../../Others/LoaderSpinner/LoaderSpinner";
const AllServices = () => {
  const [allServices, setAllServices] = useState([]);
  const { loading, setLoading } = useContext(AuthContext);
  useEffect(() => {
    fetch("https://tourist-man-server.vercel.app/allServices")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setAllServices(data);
      });
  }, [allServices, setLoading]);

  useTitle("ALL Service");
  return (
    <div>
      {loading ? (
        <LoaderSpinner></LoaderSpinner>
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
