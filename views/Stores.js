import React from 'react';
import Layout from './Layout';
import StoreCard from './components/StoreCard';
import Pagination from './components/Pagination';

function Stores({ h, title, stores, page, pages, count }) {
  return (
    <Layout h={h} title={title}>
      <div className="inner">
        <h2>{title}</h2>
        <div className="stores">
          {stores.map((store) => (
            <StoreCard key={store.name} store={store} />
          ))}
        </div>
        <Pagination page={page} pages={pages} count={count} />
      </div>
    </Layout>
  );
}

export default Stores;
