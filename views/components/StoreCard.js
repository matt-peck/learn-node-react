import React from 'react';

const StoreCard = ({ store = {} }) => (
  <div className="store">
    <div className="store__hero">
      <div className="store__actions" />
      <img src={`/uploads/${store.photo || 'store.png'}`} alt={store.name} />
      <h2 className="title">
        <a href={`/store/${store.slug}`}>{store.name}</a>
      </h2>
    </div>
    <div className="store__details">
      <p>
        {store.description
          .split(' ')
          .slice(0, 25)
          .join(' ')}
      </p>
    </div>
  </div>
);

export default StoreCard;
