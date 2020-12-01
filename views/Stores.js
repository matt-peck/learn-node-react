import React from "react";
import Layout from "./Layout";
import StoreCard from "./components/StoreCard";
import Pagination from "./components/Pagination";

const Stores = ({
  flashes,
  currentPath,
  user,
  title,
  stores,
  page,
  pages,
  count,
}) => {
  return (
    <Layout
      flashes={flashes}
      currentPath={currentPath}
      user={user}
      title={title}
    >
      <div className="inner">
        <h2>{title}</h2>
        <div className="stores">
          {stores.map((store) => (
            <StoreCard key={store.name} user={user} store={store} />
          ))}
        </div>
        {count && <Pagination page={page} pages={pages} count={count} />}
      </div>
    </Layout>
  );
};

export default Stores;
