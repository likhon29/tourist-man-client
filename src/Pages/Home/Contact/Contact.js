import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PageTitle from "../../Others/PageTitle/PageTitle";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="">
      <PageTitle pageInfo={{ title: "Contact Me" }}></PageTitle>
      <Container className=" bg-light  ">
        <Row>
          <Col lg="6">
            <div className="">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7296.343558859702!2d90.26170727474013!3d23.883526638095503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755e99900000001%3A0x2debf98e950c72ca!2sJahangirnagar%20University!5e0!3m2!1sen!2sbd!4v1667999098403!5m2!1sen!2sbd"
                width="100%"
                height="550"
                style={{ border: "2px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
          <Col lg="6">
            <div className="p-3">
              <Form>
                <h3 className="text-warning text-center mb-3">Send Message for any kind of help</h3>
                <div className="d-flex justify-content-around">
                  <Form.Group className="mb-3 me-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      className=""
                      type="email"
                      placeholder="Enter your Name"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 w-75" controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                </div>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text" placeholder="Subject" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <textarea name="" id="" cols="50" placeholder="write your massage here..." rows="10"></textarea>
                              </Form.Group>

                <Link to="/">
          <Button className="btn btn-primary w-25">Send</Button>
        </Link>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
