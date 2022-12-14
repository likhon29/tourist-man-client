import React from "react";
import { FaUserAlt } from "react-icons/fa";
import './SingleReview.css'
const SingleReview = ({ review }) => {
  return (
    <div className="d-flex review-item justify-content-between align-items-center bg-light border m-3 p-3 me-5">
          <div className="d-flex">
              <p className="text-warning fs-4 me-4">Ratings: <span>{review.ratings }</span></p>
        <p className="m-2">{review.reviewContent}</p>
      </div>
      <div className="review-item d-flex align-items-center ">
        
        <div className="">
        {review.reviewerPhoto ? <img className="rounded-circle mx-3 w-25" src={review.reviewerPhoto} alt="" /> : <FaUserAlt className="fs-1"></FaUserAlt> }
        <h5>{review.reviewerName ?  review.reviewerName : 'Unknown'}</h5>
        </div>
        <p>{review.date}</p>
      </div>
    
    </div> 
  );
};

export default SingleReview;
