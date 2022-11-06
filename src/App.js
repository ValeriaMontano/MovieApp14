import React, { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Form from "./components/Form";
import { FaStar } from "react-icons/fa";
import Stars from "./components/Stars";
import ReviewComments from "./components/ReviewComments";
import { v4 as uuidv4 } from "uuid";

function App() {
  //state hooks for the reviwes
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ movie: "", review: "", id: uuidv4 });
  const [editing, setEdinting] = useState(false);
  return (
    <>
      <div className="app">
        <MovieList />
        <Stars />
        <br></br>
        <Form
          editing={editing}
          form={form}
          reviews={reviews}
          setEditing={setEdinting}
          setForm={setForm}
          setReviews={setReviews}
        />
        <ReviewComments
          reviews={reviews}
          setForm={setForm}
          setReviews={setReviews}
          setEdinting={setEdinting}
        />
      </div>
    </>
  );
}

export default App;
