import React from "react";
import {Link} from 'react-router-dom'
const MyReviewItem = ({ review,handleDelete }) => {
  console.log(review);
  
  return (
    <tr>
      <th>
        <label>
          <button onClick={()=>handleDelete(review._id)} className="btn btn-danger">
            X
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              {review?.img && (
                <img
                  src={review.reviewerPhoto}
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{review.service_name}</div>
            <div className="text-sm opacity-50">{review.rating}</div>
          </div>
        </div>
      </td>
      <td>
        {review.reviewContent}
        <br />
        <span className="badge badge-ghost badge-sm"></span>
      </td>
      <td>{review.ratings}</td>
      <td>{review.date}</td>
      <th>
        <Link to={`/myReview/${review._id}`}><button className="btn btn-primary btn-xs">{"Edit"}</button></Link>
      </th>
    </tr>
  );
};

export default MyReviewItem;
