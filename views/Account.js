import React from "react";
import Layout from "./Layout";

const Account = ({ flashes, currentPath, user, title }) => {
  return (
    <Layout
      flashes={flashes}
      currentPath={currentPath}
      user={user}
      title={title}
    >
      <div className="inner">
        <h2>Edit Your Account</h2>
        <form action="/account" method="POST" className="form">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" defaultValue={user.name} />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" defaultValue={user.email} />

          <input type="submit" value="Update My Account" className="button" />
        </form>
      </div>
    </Layout>
  );
};

export default Account;
