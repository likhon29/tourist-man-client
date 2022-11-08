import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import ServiceItem from "../../Services/ServiceItem/ServiceItem";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";

const Home = () => {
  const { user } = useContext(AuthContext);
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data)
      });
  }, []);
  console.log(services);
  return (
    <div>
      <Banner></Banner>
      <div className="container">
        {/* <h1>Services:{services.length}</h1> */}
        {services.map((service) => (
          <ServiceItem service={service} key={service._id}></ServiceItem>
        ))}
        <div className="mx-auto text-center">
        <Link to="/allServices">
          <Button className="btn btn-primary w-25">Show All</Button>
        </Link>
       </div>
      </div>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default Home;
