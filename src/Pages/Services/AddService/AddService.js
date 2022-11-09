import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import useTitle from "../../../Hooks/useTitle";
import { useNavigate } from "react-router-dom";
const AddService = () => {
    const {setLoading}=useContext(AuthContext);
    const [ratings, setRatings] = useState(0);
  const [services, setServices] = useState([])
  const navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:5000/allServices')
            .then(res => res.json())
            
            .then(data => {
                setLoading(false)
                setServices(data)
            })
    },[services,setLoading]);
    
  //   const [reviews, setReviews] = useState([]);

  //   const { user } = useContext(AuthContext);
  //   const { _id, service_name } = service;
  //   const { displayName, email, photoURL } = user;
    const handleNewService = (event) => {
      console.log("clicked");
      event.preventDefault();
      const form = event.target;
      const description= form.description.value;
        const service_name = form.service_name.value;
        const photoURL = form.photoURL.value;
        const price = form.price.value;
      
      const serviceInfo = {
        
        service_name: service_name,
        description: description,
        rating: ratings,
        image: photoURL,
       price:price
      };

      console.log(serviceInfo);
    //   setReviews({ reviewInfo });
      fetch("http://localhost:5000/allServices", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(serviceInfo),
      })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            
          if (data.acknowledged) {
            alert("Service added successfully");
            form.reset();
            navigate('/')
          }
        })
        .catch((er) => console.error(er));
    };
  const handleRating = (event) => {
    event.preventDefault();
    setRatings(event.target.value);
  };
 useTitle("Add Service");

  return (
    <div className="container mb-5">
          <h1 className="text-center text-primary">Add service : { services.length}</h1>
      <div className="container">
        <form onSubmit={handleNewService}>
          <label for="exampleFormControlTextarea1" className="form-label">
            Service Name
          </label>
                  <input
                      name="service_name"
            type="text"
            placeholder="Enter your service name"
            className="form-control"
          />

        
          <label for="exampleFormControlTextarea1" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            placeholder="Enter service photo URl"
            className="form-control"
            name="photoURL"
          />
          <label for="exampleFormControlTextarea1" className="form-label">
            Service Fee
          </label>
          <input
            type="text"
            placeholder="Enter your service fee"
                      className="form-control"
                      name="price"
          />
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Rating
            </label>
            <select
              required
              name="rating"
              className="form-select"
              aria-label="Default select example"
              onChange={handleRating}
            >
              <option>Select</option>
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>
                  </div>
                  <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Service Description
            </label>
            <textarea
              placeholder="Enter your service description"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="description"
            ></textarea>
          </div>
          <input
            className="btn btn-primary"
            type="submit"
            value="Add Service"
          />
        </form>
      </div>
    </div>
  );
};

export default AddService;
