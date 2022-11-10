import React from "react";
import image from "../../../Assets/images/logo.jpg";
import image1 from "../../../Assets/images/logo-2.png";
import useTitle from "../../../Hooks/useTitle";
import PageTitle from "../../Others/PageTitle/PageTitle";
import "./About.css";
import { Col, Container, Row } from "react-bootstrap";
const About = () => {
  //  useTitle("About");

  return (
    <div className="">
      <PageTitle pageInfo={{ title: "About  Tourist-Man" }}></PageTitle>

      <Container className=" bg-light  ">
        <Row>
          <Col lg="6" className="">
          <h1 className="my-3 m-5 fs-1 text-warning font-bold">
              My First Priority <br />
              <span className='fs-5'>will serve  qualified & fast services with minimum cost. </span> 
            </h1>
            <p className="py-6 my-3 m-5 fs-4">
              I will provide different kind of one man providing service as well as i also serve retailing services with effieciently low cost and trusted services with fasted services
            </p>
            
            <button className="btn btn-primary mx-5">Get More Info</button>
          </Col>

          <Col lg="6" className=" position-relative">
            <img src={image} alt="" className=" w-100 " />

            <img
              className="w-50  bottom-0 pe-5 position-absolute start-0  rounded-5"
              src="https://www.pngitem.com/pimgs/m/510-5107618_traveler-vector-tour-travels-travel-and-tours-logo.png"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
