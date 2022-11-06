import React from "react";
import ReviewItem from "./ReviewItem";

const ReviewComments = ({ reviews, setEdinting, setForm, setReviews }) => {
  const handleDelete = (id) => {
    const updateReviews = reviews.filter((review) => review.id !== id);
    //for every review in the [] we are checking for the id and and update the reviews (get rid of the id and set the reviews to the new array)

    setReviews(updateReviews);
  };
  //handle function takes anid and we filter through and get the review.id that equals the id that is being passed in
  //andset the form to the edited post and set the editing mode to true
  const handleEdit = (id) => {
    const editedPost = reviews.filter((review) => review.id === id);
    setForm(editedPost[0]);
    setEdinting(true);
  };

  return (
    <div className="reviewlist">
      {reviews.map((review) => (
        <ReviewItem
          key={review.id}
          review={review}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
};
//In app we have review comments component (app = parent,rc = child)
//review comments gets the review property set to an empty arr[],where the submitted reviews get added to
//grab the reviews in the props,3, and map through themand for each review we get we create
// a review item which will have access to that individual review object
export default ReviewComments;
