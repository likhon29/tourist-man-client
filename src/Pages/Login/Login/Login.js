import React, { useContext } from "react";
import "./Login.css";
import { ButtonGroup, Col, Container, Image, Row } from "react-bootstrap";
import img from "../../../Assets/images/login.svg";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import toast from "react-hot-toast";
import useTitle from "../../../Hooks/useTitle";
const Login = () => {
  const [error, setError] = useState("");
  const { signIn, setLoading, providerLogin, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };
  const handleFacebookLogin = () => {
    providerLogin(facebookProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
          
        }
        console.log(currentUser);
        form.reset();
        setError("");
        //get jwt token

        fetch('http://localhost:5000/jwt', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(currentUser)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            localStorage.setItem('tourist-man-token', data.token)
            navigate(from, { replace: true });
            toast.success("Welcome to Tourist Man...");
        })

        
        
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useTitle("Login");

  return (
    <div className="login">
      <div className="container">
        <Container className="form-container">
          <Row>
            <Col lg="4">
              <div className="container py-5">
                <Image src={img}></Image>
              </div>
            </Col>
            <Col lg="7">
              <div className="bg-primary m-4">
                <div className="ms-1 bg-white">
                  {/* <h3 className="ms-5">Login Form</h3> */}
                  <Form
                    onSubmit={handleSubmit}
                    className="container w-100 my-5 p-5 rounded  text-center"
                  >
                    <h2 className="text-center">Login Now!</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="email"
                        placeholder="Username or Email Address"
                        name="email"
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                      />
                    </Form.Group>
                    <Form.Group
                      className="d-flex justify-content-between text-start  mb-3"
                      controlId="formBasicCheckbox"
                    >
                      <Form.Check type="checkbox" label={<> Remember Me</>} />
                      <Form.Text>
                        <Link to="/" className="text-warning me-3">
                          Forgot Password
                        </Link>
                      </Form.Text>
                    </Form.Group>
                    <Form.Text className="text-danger fs-5">{error}</Form.Text>
                    <Button
                      variant="warning"
                      className="w-75 text-white "
                      type="submit"
                    >
                      Login
                    </Button>{" "}
                    <br />
                    <Form.Text className="text-dark">
                      Don't have an account?{" "}
                      <Link className="text-warning btn-link" to="/register">
                        Create an account
                      </Link>
                    </Form.Text>{" "}
                    <br />
                    <div className="d-flex w-75 mx-auto text-white">
                      <hr className="ms-5 w-50 d-inline" />
                      <p className="mx-2">Or</p>
                      <hr className="w-50 me-5" />
                    </div>
                    <ButtonGroup sm-vertical='true'>
                      <Button
                        onClick={handleGoogleSignIn}
                        className="d-flex justify-content-center align-items-center w-50 "
                        variant="success"
                      >
                        {" "}
                        <FaGoogle className="text-warning fs-1 me-2"></FaGoogle>{" "}
                        Continue with Google
                      </Button>

                      <Button
                        onClick={handleFacebookLogin}
                        className="d-flex justify-content-center align-items-center w-50"
                        variant="primary"
                      >
                        {" "}
                        <FaFacebook className=" fs-1"></FaFacebook> Continue
                        with Facebook
                      </Button>
                    </ButtonGroup>
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

export default Login;
