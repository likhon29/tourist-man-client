import React from "react";
import { FaUserAlt } from "react-icons/fa";

const SingleReview = ({ review }) => {
  return (
    <div className="d-flex justify-content-between align-items-center bg-light border m-3 p-3">
          <div className="">
              <span>{review.ratings }</span>
        <p>{review.reviewContent}</p>
      </div>
      <div className="d-flex align-items-center ">
        
        <div className="">
        {review.reviewerPhoto ? <img className="rounded-circle mx-3" src={review.reviewerPhoto} alt="" /> : <FaUserAlt></FaUserAlt> }
        <h5>{review.reviewerName ?  review.reviewerName : 'Unknown'}</h5>
        </div>
        <p>{review.date}</p>
      </div>
    
    </div> 
  );
};

export default SingleReview;
