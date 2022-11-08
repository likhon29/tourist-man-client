import React from "react";

const SingleReview = ({ review }) => {
  return (
    <div className="d-flex justify-content-between align-items-center bg-light border m-3 p-3">
          <div className="">
              <span>{review.ratings }</span>
        <p>{review.reviewContent}</p>
      </div>
      <div className="">
        <img src={review.reviewerPhoto} alt="" />
        <h2>{review.reviewerName ?  review.reviewerName : 'Unknown'}</h2>
        <p>{review.date}</p>
      </div>
    
    </div>
  );
};

export default SingleReview;
