import React from "react";
import "./Blogs.css";

import { Button, Card } from "react-bootstrap";
const Blogs = () => {
  return (
    <div className="container ">
     
      <Card className="mx-auto w-75">
        <Card.Img variant="top" src="https://geekflare.com/wp-content/uploads/2019/11/cors.jpg" />
        <Card.Body>
          <Card.Title className="text-primary">What is CORS?
        </Card.Title>
          <Card.Text>
            <p>
            CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.

            In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.
            </p>
            <img
              src="https://i0.wp.com/www.section.io/engineering-education/how-to-use-cors-in-nodejs-with-express/diffrent-origin.jpg?resize=728%2C177&ssl=1"
              width="50%"
              alt=""
            />
            <p>
            The client and server have a different origin from each other, i.e., accessing resources from a different server. In this case, trying to make a request to a resource on the other server will fail.

            This is a security concern for the browser. CORS comes into play to disable this mechanism and allow access to these resources. It will add a response header access-control-allow-origins and specify which origins are permitted. CORS ensures that we are sending the right headers.
            </p>
            
          </Card.Text>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>
      <Card className="mx-auto w-75">
        <Card.Img variant="top" src="https://firebase.google.com/images/social.png" />
        <Card.Body>
          <Card.Title className="text-primary">Why are you using firebase? What other options do you have to implement authentication?</Card.Title>
          <Card.Text>
            <p>
            The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
            </p>
            <p>
            Google Analytics for Firebase allows you to track your users' journey through realtime and custom reporting. As mentioned previously, Firebase supports IOS, Android, Web, and Unity products, allowing you to track your users across a wide range of devices.
            </p>
            <p>
            User Authentication Platforms without firebase
              <ul>
                <li>STYTCH</li>
                <li>Ory</li>
                <li>Supabase</li>
                <li>Okta</li>
                <li>PingIdentity</li>
                <li>Keycloak</li>
                <li>Frontegg</li>
                <li>Authress</li>
               
              </ul>
            </p>
          </Card.Text>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>
      <Card className="mx-auto w-75">
        <Card.Img variant="top" src="https://i.ytimg.com/vi/y6S26FiwEy4/maxresdefault.jpg" />
        <Card.Body>
          <Card.Title className="text-primary">How does the private route work?</Card.Title>
          <Card.Text>
            <p>
            The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)
              
            </p>
            <p>Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.

The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login.</p>
          </Card.Text>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>
      <Card className="mx-auto w-75">
        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" />
        <Card.Body>
          <Card.Title className="text-primary">What is Node? How does Node work?</Card.Title>
          <Card.Text>
            <p>
            Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
              
            </p>
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20210916203407/WorkingofNodejs1.png"
              width="50%"
              alt=""
            />
            <p>Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.

Node.js basically works on two concept

Asynchronous
Non-blocking I/O</p>
          </Card.Text>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blogs;
