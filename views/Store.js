import React from "react";
import Layout from "./Layout";
import ReviewForm from "./components/ReviewForm";
import Review from "./components/Review";

const getstaticMap = ([lng, lat]) =>
  `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=800x150&key=${process.env.MAP_KEY}&markers=${lat},${lng}&scale=2`;

const Store = ({ flashes, currentPath, user, title, store }) => {
  return (
    <Layout
      flashes={flashes}
      currentPath={currentPath}
      user={user}
      title={title}
    >
      <div className="single">
        <div className="single__hero">
          <img
            src={`/uploads/${store.photo || "store.png"}`}
            className="single__image"
          />
          <h2 className="title title--single">
            <a href={`/store/${store.slug}`}>{store.name}</a>
          </h2>
        </div>
      </div>
      <div className="single__details inner">
        <img
          src={getstaticMap(store.location.coordinates)}
          className="single__map"
        />
        <p className="single__location">{store.location.address}</p>
        <p>{store.description}</p>
        <ul className="tags">
          {store.tags.map((tag) => {
            return (
              <li key={tag} className="tag">
                <a href={`/tags/${tag}`} className="tag__link">
                  <span className="tag__text">#{tag}</span>
                </a>
              </li>
            );
          })}
        </ul>
        {user && <ReviewForm store={store} />}
        {store.reviews && (
          <div className="reviews">
            {store.reviews.map((review) => {
              return <Review key={review._id} review={review} />;
            })}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Store;
