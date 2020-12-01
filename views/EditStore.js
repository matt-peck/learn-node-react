import React from "react";
import Layout from "./Layout";
import StoreForm from "./components/StoreForm";

const EditStore = ({ flashes, currentPath, user, title, store }) => {
  return (
    <Layout
      flashes={flashes}
      currentPath={currentPath}
      user={user}
      title={title}
    >
      <div className="inner">
        <h2>{title}</h2>
        <StoreForm store={store} />
      </div>
    </Layout>
  );
};

export default EditStore;
