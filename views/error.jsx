const React = require("react");

function Error(props) {
  return (
    <div className="inner">
      <h2>{props.status}</h2>
      <p>{props.message}</p>
      <pre className="error">{props.stackHighlighted}</pre>
    </div>
  );
}

module.exports = Error;
