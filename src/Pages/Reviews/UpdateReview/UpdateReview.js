import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import useTitle from "../../../Hooks/useTitle";

const UpdateReview = () => {
    const storedReview = useLoaderData();
    //   const [review, setReview] = useState(storedReview);
    const { service_name,reviewContent } = storedReview;
    const [ratings, setRatings] = useState(storedReview.ratings);
  const handleUpdateReview = (event) => {
    console.log("clicked");
    event.preventDefault();
      const form = event.target;
      const reviewContent = form.review.value;
       const updateInfo = {

         reviewContent: reviewContent,
         ratings: ratings,

       };

    // console.log(updateInfo);
    fetch(`http://localhost:5000/myReview/${storedReview._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("Review Update successfully");
          console.log(data);
        }
        //    if (data.acknowledged) {
        //      alert("Review Update successfully");
        //      form.reset();
        //    }
      })
     .catch((er) => console.error(er));
  };
//   const handleInputChange = (event) => {
//     const field = event.target.name;
//     const value = event.target.value;
//     const newReview = { ...review };
//     newReview[field] = value;
//     setReview(newReview);
//   };
    const handleRating = (event) => {
      event.preventDefault();
      setRatings(event.target.value);
    };
  useTitle("Update Review");
  return (
    <div className="container">
      <form onSubmit={handleUpdateReview}>
        <input
          type="text"
          readOnly={true}
          className="form-control bg-success text-white text-center w-75 mx-auto"
          defaultValue={service_name}
        />
        <div className="mb-3">
          <label className="form-label">Your Review</label>
          <textarea
            required
            placeholder="Enter your review description"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="review"
            
            defaultValue={reviewContent}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Rating</label>
        
                  <select
                      defaultValue={ratings}
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
          value="Update Review"
        />
      </form>
    </div>
  );
};
export default UpdateReview;
