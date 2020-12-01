import React from "react";
import Layout from "./Layout";

const Map = ({ flashes, currentPath, user, title }) => {
  return (
    <Layout
      flashes={flashes}
      currentPath={currentPath}
      user={user}
      title={title}
    >
      <div className="inner">
        <h2>{title}</h2>
        <div className="map">
          <div className="autocomplete">
            <input
              type="text"
              placeholder="Search for Anything"
              name="geolocate"
              className="autocomplete__input"
            />
          </div>
          <div id="map">
            <p>Loading Map...</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Map;
