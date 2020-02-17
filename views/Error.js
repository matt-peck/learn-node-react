import React from "react";

const Error = ({ status, message, stackHighlighted }) => (
  <div className="inner">
    <h2>{status}</h2>
    <p>{message}</p>
    <pre className="error">{stackHighlighted}</pre>
  </div>
);

export default Error;
