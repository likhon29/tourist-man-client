import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import img from "../../../Assets/images/login.svg";
import "./Register.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
const Register = () => {
  const [error, setError] = useState("");
  const [accept, setAccept] = useState(false);
  const {
    user,
    createUser,
    verifyEmail,
    updateUserProfile,
    volunteer,
    setVolunteer,
    setLoading,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    const phone = form.phone.value;
    const photURL = form.photoURL.value;
    const userInfo = {
      email,
      name,
      password,
      phone,
      photURL,
    };
    console.log(userInfo);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        user.photURL = photURL;
        user.displayName = name;
        user.phone = phone;
        console.log(user);
        setError("");
        form.reset();
        setLoading(true);
        handleUpdateUserProfile({ userInfo });
        // handleEmailVerification();
        toast.success("Please verify your email");
        navigate("/");
      })
      .catch((err) => {
        console.error(err.message);
        setError(err.message);
      });

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newMembers = [...volunteer, data];
        setVolunteer(newMembers);
      })
      .catch((err) => console.error(err));
  };

  const handleUpdateUserProfile = ({ userInfo }) => {
    updateUserProfile(userInfo)
      .then(() => {
        // user.photoURL = userInfo.photoURL;
      })
      .catch((error) => console.error(error));
  };

  const handleEmailVerification = () => {
    verifyEmail()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const handleAccept = (event) => {
    setAccept(event.target.checked);
  };
  return (
    <div>
      <div className="container">
        <Container className="form-container">
          <Row>
            <Col lg="4" class>
              <div className="container left-side py-5">
                <Image src={img}></Image>
              </div>
            </Col>
            <Col lg="8">
              <div className=" bg-success m-4">
                <div className="ms-1 bg-white">
                  <h3 className="ms-3 mt-3 text-success">Registration Form</h3>
                  <Form onSubmit={handleSubmit} className="ms-2 container">
                    <Form.Group className=" mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                      />

                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        required
                        placeholder="Enter Your Full Name"
                      />

                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Phone Number"
                        name="phone"
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Photo URL</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Photo URL"
                        name="photoURL"
                        required
                      />
                    </Form.Group>
                    <Form.Check
                      className="my-3"
                      type="checkbox"
                      onClick={handleAccept}
                      label={
                        <>
                          Accept all
                          <Link className="text-warning ms-2" to="/terms">
                            Terms and conditions
                          </Link>{" "}
                          of Tourist_man
                        </>
                      }
                    />
                    <Form.Text className="text-danger">{error}</Form.Text>

                    <Button
                      variant="primary"
                      className="w-75 my-3 "
                      type="submit"
                      disabled={!accept}
                    >
                      Create an account
                    </Button>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Register;
