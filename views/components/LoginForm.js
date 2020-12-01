import React from "react";

const LoginForm = () => {
  return (
    <form action="/login" method="POST">
      <h2>Login</h2>
      <label htmlFor="email">Email Address</label>
      <input type="email" name="email" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" />
      <input type="submit" className="button" value="Log In →" />
    </form>
  );
};

export default LoginForm;
