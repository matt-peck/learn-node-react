import React, { Fragment } from "react";

const ReviewForm = ({ store }) => {
  return (
    <form action={`/reviews/${store._id}`} method="POST" className="reviewer">
      <textarea
        name="text"
        placeholder="Did you try this place? Have something to say? Leave a review..."
      />
      <div className="reviewer__meta">
        <div className="reviewer__stars">
          {[5, 4, 3, 2, 1].map((num) => {
            return (
              <Fragment>
                <input
                  type="radio"
                  name="rating"
                  id={`star${num}`}
                  value={num}
                  required
                />
                <label htmlFor={`star${num}`}>{num} Stars</label>
              </Fragment>
            );
          })}
        </div>
        <input type="submit" value="Submit Review →" className="button" />
      </div>
    </form>
  );
};

export default ReviewForm;
