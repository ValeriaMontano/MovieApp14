import React from "react";
import Stars from "./Stars";
import { v4 as uuidv4 } from "uuid";

export const Form = ({
  editing,
  form,
  reviews,
  setEditing,
  setForm,
  setReviews,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    //set the Form value @movie or review to be whatever the value is of that input/textarea
    //now I can use handleChange below
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, form]);
    setForm({ movie: "", review: "", id: uuidv4() }); //reset the state to empty after each review
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setEditing(false);
    //take current reviews array and map through it and look at each id on each review and
    //if that id equals to the id on the form we update the value otherwise we leave it as is
    const updateReviews = reviews.map((review) =>
      review.id === form.id ? form : review
    );
    setReviews(updateReviews);
    setForm({ movie: "", review: "", id: uuidv4() }); //clear up the form
  };
  //t.op. if editingis true we update if false we just submit
  return (
    <form className="form" onSubmit={editing ? handleUpdate : handleSubmit}>
      <input
        type="text"
        placeholder="Movie Name"
        id="movie"
        name="movie"
        value={form.movie}
        onChange={handleChange}
      />
      <br></br>
      <textarea
        value={form.review}
        placeholder="Leave Your Review Here"
        id="review"
        name="review"
        onChange={handleChange}
      />
      <br></br>
      <button type="submit">{editing ? "Update" : "Submit"}</button>
    </form>
  );
};
export default Form;
