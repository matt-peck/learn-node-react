import React from "react";
import Layout from "./Layout";

const Register = ({ flashes, currentPath, user, title, tag, tags, stores }) => {
  return (
    <Layout
      flashes={flashes}
      currentPath={currentPath}
      user={user}
      title={title}
    >
      <div className="inner">
        <form action="/register" method="POST" className="form">
          <h2>Register</h2>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" />

          <label htmlFor="password-confirm">Confirm Password</label>
          <input type="password" name="password-confirm" />

          <input type="submit" value="Register →" className="button" />
        </form>
      </div>
    </Layout>
  );
};

export default Register;
