import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const ReviewForm = ({ service }) => {
  const [ratings, setRatings] = useState(0);
  const [reviews, setReviews] = useState([]);

  const { user } = useContext(AuthContext);
  const { _id, service_name } = service;
  const { displayName, email, photoURL } = user;
  const handleReview = (event) => {
    console.log("clicked");
    event.preventDefault();
    const form = event.target;
    const reviewContent = form.review.value;
    // console.log(reviews);
    const currentdate = new Date();
    const date = "Last Sync: " + currentdate.getDay() + "/" + currentdate.getMonth() 
    + "/" + currentdate.getFullYear() + " @ " 
    + currentdate.getHours() + ":" 
    + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    console.log(date);
    const reviewInfo = {
      service: _id,
      service_name: service_name,
      reviewContent: reviewContent,
      ratings: ratings,

      reviewerName: displayName,
      reviewerEmail: email,
      reviewerPhoto: photoURL,
      date: date,
    };

    console.log(reviewInfo);
    setReviews({ reviewInfo });
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Review added successfully");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };
  const handleRating = (event) => {
    event.preventDefault();
    setRatings(event.target.value);
  };
  return (
    <div className="container">
      <form onSubmit={handleReview}>
        <input
          type="text"
          readOnly="true"
          className="form-control bg-success text-white text-center w-75 mx-auto"
          defaultValue={service.service_name}
        />
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Review
          </label>
          <textarea
            placeholder="Enter your review description"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="review"
          ></textarea>
        </div>
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
        <input
          className="btn btn-primary"
          type="submit"
          value="Submit Review"
        />
      </form>
    </div>
  );
};

export default ReviewForm;
