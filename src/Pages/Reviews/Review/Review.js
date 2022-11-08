import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import ReviewForm from "../ReviewForm/ReviewForm";
import SingleReview from "../SingleReview/SingleReview";
import "./Review.css";
const Review = ({ service }) => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?service=${service._id}`)
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, [reviews, service._id]);
  //   console.log(reviews);
  // function sortByDateFunc(d1, d2) {
  //   if (d1.date < d2.date) {
  //     return 1;
  //   }
  //   if (d1.date > d2.date) {
  //     return -1;
  //   }
  //   return 0;
  // }
  // const sortedReview = reviews.sort(sortByDateFunc);

  return (
    <div>
      <h3 className="text-warning">
        Customer Reviews for {service.service_name}
        
      </h3>
      <p className="text-success">No of Reviews:{reviews.length }</p>
      <div className="">
        {reviews.length===0 ? <h1 className="text-danger text-center">No Reviews Found</h1> : <>{reviews.map((review) => (
          <SingleReview review={review} key={review._id}></SingleReview>
        ))}</>}
        
        
      </div>
      {user ? (
        <ReviewForm service={service}></ReviewForm>
      ) : (
        <>
          <div className="d-flex">
            <h3>
              Please login to add a review <Link to="/login">Login</Link>
            </h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Review;
