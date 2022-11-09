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

      <Container className="container bg-light  ">
        <Row>
          <Col lg="6" className="">
          <h1 className="my-3 m-5 fs-1 font-bold">
              I am qualified &<br />
               of experience 
              in this field
            </h1>
            <p className="py-6 my-3 m-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p className="py-6 m-5">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.{" "}
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
