import React, { useContext, useState } from "react";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Offcanvas from "react-bootstrap/Offcanvas";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../Assets/images/logo-2.png";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "./Header.css";
const Header = () => {
  const { user,logOut } = useContext(AuthContext);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {user?.displayName}
    </Tooltip>
  );
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="header-container ">
      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand} className=" container mb-3 ">
          <Container fluid>
            <Navbar.Brand
              className="d-flex align-items-center text-primary"
              as={Link}
              to="/"
            >
              <img
                src={logo}
                width={80}
                
                style={{  }}
                alt=""
              />{" "}
              <h2 className="ms-3 text-danger">Tourist.Man </h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className=" justify-content-end flex-grow-1 px-5 fs-5">
                <Nav.Link className=" me-4" as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link className=" me-4" as={Link} to="/allServices">
                  Services
                </Nav.Link>
                <Nav.Link className=" me-4" as={Link} to="/faq">
                  FAQ
                </Nav.Link>
                <Nav.Link className=" me-4" as={Link} to="/blogs">
                  Blog
                </Nav.Link>

                

                <>
                  {user?.uid ? (
                    <>
                      <Nav.Link className=" me-2" as={Link} to="/myReview">
                        My Review
                      </Nav.Link>
                      <Nav.Link className=" me-1" as={Link} to="/addServices">
                        Add Services
                                      </Nav.Link>
                                      <Link to="/profile">
                  {user ? (
                    <>
                      {" "}
                      <OverlayTrigger
                        placement="right"
                        delay={{ show: 50, hide: 400 }}
                        overlay={renderTooltip}
                      >
                        {user?.photoURL ? (
                          <>
                            <Image
                              className="fs-5 me-2"
                              style={{ height: "40px", marginTop: "6px" }}
                              roundedCircle
                              src={user?.photoURL}
                              title={user?.displayName}
                            ></Image>
                          </>
                        ) : (
                          <FaUser
                            title={user?.displayName || "Unknown"}
                            className="fs-2 mt-2"
                          ></FaUser>
                        )}
                      </OverlayTrigger>
                    </>
                  ) : (
                    <></>
                  )}
                </Link>
                      <Button
                        onClick={handleLogOut}
                        className="ms-2"
                        variant="danger"
                      >
                        
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Nav.Link
                        className=" text-white btn btn-primary py-auto px-5"
                        as={Link}
                        to="/login"
                      >
                        Login
                      </Nav.Link>
                    </>
                  )}
                </>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default Header;
