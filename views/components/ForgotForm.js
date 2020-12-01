import React from "react";

const ForgotForm = () => {
  return (
    <form action="/account/forgot" method="POST">
      <h2>I forgot my password!</h2>
      <label htmlFor="email">Email Address</label>
      <input type="email" name="email" />
      <input type="submit" className="button" value="Send a Reset" />
    </form>
  );
};

export default ForgotForm;
