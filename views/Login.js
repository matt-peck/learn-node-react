import React from "react";
import Layout from "./Layout";
import LoginForm from "./components/LoginForm";
import ForgotForm from "./components/ForgotForm";

const Login = ({ flashes, currentPath, user, title, store }) => {
  return (
    <Layout
      flashes={flashes}
      currentPath={currentPath}
      user={user}
      title={title}
    >
      <div className="inner">
        <LoginForm />
        <ForgotForm />
      </div>
    </Layout>
  );
};

export default Login;
