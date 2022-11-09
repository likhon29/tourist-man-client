import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import useTitle from "../../../Hooks/useTitle";
import MyReviewItem from "../MyReviewItem/MyReviewItem";
import SingleReview from "../SingleReview/SingleReview";

const MyReview = () => {
  const { user, loading, setLoading, logOut } = useContext(AuthContext);
  const [myReview, setMyReview] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myReviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("tourist-man-token")}`,
      },
    })
      .then((response) => {
        if (response.status === 401 || response.status === 403) {
          logOut();
        }
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        setMyReview(data);
      });
  }, [user?.email, setLoading, logOut]);
  console.log(myReview);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this order"
    );
    if (proceed) {
      fetch(`http://localhost:5000/myReview/${id}`, {
        method: "DELETE",
        headers: {},
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = myReview.filter((review) => review._id !== id);
            setMyReview(remaining);
          }
        });
    }
  };
  useTitle("MyReview");

  return (
    <div className="container">
      <h1>My Review:{myReview.length}</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Service Name</th>
              <th>Reviews</th>
              <th>Ratings</th>
              <th>Date</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <div id="loader" className="d-flex justify-content-center ">
                <Spinner
                  className="text-center"
                  animation="border"
                  variant="info"
                />
              </div>
            ) : (
              <>
                {myReview.map((review) => (
                  <MyReviewItem
                    review={review}
                    key={review._id}
                    handleDelete={handleDelete}
                  ></MyReviewItem>
                ))}
              </>
            )}
          </tbody>
        </table>
        {myReview.length === 0 ? (
          <h1 className="text-danger text-center">No Reviews were added</h1>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default MyReview;
