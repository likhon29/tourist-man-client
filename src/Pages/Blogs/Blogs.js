import React from "react";
import "./Blogs.css";

import useTitle from "../../Hooks/useTitle";
import { Button, Card } from "react-bootstrap";
const Blogs = () => {
 useTitle("Blogs");

  return (
    <div className="container ">
     
      <Card className="mx-auto w-75">
        <Card.Img variant="top" src="https://i.ytimg.com/vi/QwevGzVu_zk/maxresdefault.jpg" />
        <Card.Body>
          <Card.Title className="text-primary">o	What is the Difference between SQL and NoSQL?
        </Card.Title>
          <Card.Text>
            <p>
            SQL databases are relational, NoSQL databases are non-relational.
SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
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
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLhjlaJh0yUSX0b-JP6wkxzVpcQDYjtwHENA&usqp=CAU" />
        <Card.Body>
          <Card.Title className="text-primary">o	What is JWT, and how does it work?</Card.Title>
          <Card.Text>
            <p>
            JWT or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
            </p>
            <p>
            JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

            A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.

        
            </p>
            <img src="https://fullstackmark.com/img/posts/19/jwt-flow-using-authentication-server-with-access-token-and-resource-server.png" alt="" />
            <p>
            Once decoded, you will get two JSON strings:

The header and the payload.
The signature. 
The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.  

The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.

There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others. 

The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature. 
            </p>
          </Card.Text>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>
      <Card className="mx-auto w-75">
        <Card.Img variant="top" src="https://blog.boot.dev/img/800/Nodejs-vs-Javascript-min.webp" />
        <Card.Body>
          <Card.Title className="text-primary">o	What is the difference between javascript and NodeJS?</Card.Title>
          <Card.Text>
            <p>
            1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.

As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option.
              
            </p>
            <p>
            2.JavaScript is normally used for any client-side activity for one web application. An activity can be addressing business validation or dynamic page display in some schedule time interval or basic Ajax call kind of task. Those are used for a maximum time for any web application. Whereas Node JS mainly used for accessing or running any operating system for non-blocking operation. An operation like creating or executing a shell script, or getting some specific hardware-related information on one call or installed certificate details in the system or a lot of define task is non-blocking on an operating system.
            </p>
            <p>3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.</p>
          </Card.Text>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>
      <Card className="mx-auto w-75">
        <Card.Img variant="top" src="https://assets.digitalocean.com/articles/68408/node_green_tutorial.png" />
        <Card.Body>
          <Card.Title className="text-primary">o	How does NodeJS handle multiple requests at the same time?</Card.Title>
          <Card.Text>
            <p>
            We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded. 
              
            </p>
            <img
              src="https://miro.medium.com/max/1290/1*G6mHZlqhKJ5_UxUWoCdUng.png"
              width="50%"
              alt=""
            />
            <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. 

If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
          </Card.Text>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blogs;
