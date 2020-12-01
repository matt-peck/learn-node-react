import React from "react";
import Layout from "./Layout";

const Reset = ({ flashes, currentPath, user, title }) => {
  return (
    <Layout
      flashes={flashes}
      currentPath={currentPath}
      user={user}
      title={title}
    >
      <div className="inner">
        <form method="POST" className="form">
          <h2>Reset Your Password</h2>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
          <label htmlFor="password-confirm">Confirm Password</label>
          <input type="password" name="password-confirm" />
          <input type="submit" className="button" value="Reset Password →" />
        </form>
      </div>
    </Layout>
  );
};

export default Reset;
