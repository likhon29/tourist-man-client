import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import ReviewForm from "../ReviewForm/ReviewForm";
import SingleReview from "../SingleReview/SingleReview";
import "./Review.css";
import { Navigate, useLocation } from "react-router-dom";

const Review = ({ service }) => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(
      `https://tourist-man-server.vercel.app/reviews?service=${service._id}`
    )
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, [reviews, service._id]);
  const location = useLocation();

  return (
    <div>
      {user ? (
        <ReviewForm service={service}></ReviewForm>
      ) : (
        <>
          <div className="d-flex">
            <h3>
              Please <Link to="/login">Login</Link> to add a review
            </h3>
            {/* <Navigate to="/login" state={{ from: location }} replace></Navigate> */}
          </div>
        </>
      )}
      <h3 className="text-warning">
        Customer Reviews for {service.service_name}
      </h3>
      <p className="text-success">No of Reviews:{reviews.length}</p>
      <div className="">
        {reviews.length === 0 ? (
          <h1 className="text-danger text-center">No Reviews Found</h1>
        ) : (
          <>
            {reviews.map((review) => (
              <SingleReview review={review} key={review._id}></SingleReview>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Review;
