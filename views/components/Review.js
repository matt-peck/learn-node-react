import moment from "moment";
import React, { Fragment } from "react";

const Review = ({ review }) => {
  return (
    <div className="review">
      <div className="review__header">
        <div className="review__author">
          <img src={review.author.gravatar} className="avatar" />
          <p>{review.author.name}</p>
        </div>
        <div
          className="review__stars"
          title={`Rates ${review.rating} out of 5 stars`}
        >
          {`★`.repeat(review.rating)}
          {`☆`.repeat(5 - review.rating)}
        </div>
        <time className="review__time" dateTime={review.created}>
          {moment(review.created).fromNow()}
        </time>
      </div>
      <div className="review__body">
        <p>{review.text}</p>
      </div>
    </div>
  );
};

export default Review;
