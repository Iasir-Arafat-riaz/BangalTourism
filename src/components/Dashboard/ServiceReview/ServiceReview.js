import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';
import "./ServiceReview.css"
const ServiceReview = () => {
    const [rating, setRating] = useState(1);
  const [userComment, setUserComment] = useState("");
const {user}=useAuth()
  const comments = (e) => {
    setUserComment(e.target.value);
  };

  const ratingOne = () => {
    setRating(1);
  };
  const ratingTwo = () => {
    setRating(2);
  };
  const ratingThree = () => {
    setRating(3);
  };
  const ratingFour = () => {
    setRating(4);
  };
  const ratingFive = () => {
    setRating(5);
  };
  console.log(rating);

  const reviewForm = () => {
    const commentObject = {
      name: user.displayName,
      email: user.email,
    description: userComment,
    rating: rating,
    };
    console.log(commentObject);
    axios.post("https://glacial-shelf-30568.herokuapp.com/review", commentObject).then((res) => {
      console.log(res);
      if (res.status === 200) {
        setUserComment("");
        Swal.fire("Your Review Submitted");
      }
    });
  };
    return (
        <div className="review text-center">
      <h1>Here write your review </h1>

      <textarea
        required
        placeholder="Please Share Your Valuable Review"
        onBlur={comments}
        name=""
        id=""
        cols="15"
        rows="5"
      ></textarea>
      <br />
      <button onClick={ratingOne} className="reviewBtn">
        <b>1</b>
      </button>
      <button onClick={ratingTwo} className="reviewBtn">
        <b>2</b>
      </button>
      <button onClick={ratingThree} className="reviewBtn">
        <b>3</b>
      </button>
      <button onClick={ratingFour} className="reviewBtn">
       <b> 4</b>
      </button>
      <button onClick={ratingFive} className="reviewBtn">
        <b>5</b>
      </button>
      <br />
      <button className="reviewSubmit" onClick={reviewForm}>
       <b> Review</b>
      </button>
    </div>
    );
};

export default ServiceReview;