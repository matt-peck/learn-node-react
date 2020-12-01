import React from "react";
import Layout from "./Layout";
import StoreCard from "./components/StoreCard";

const Tag = ({ flashes, currentPath, user, title, tag, tags, stores }) => {
  return (
    <Layout
      flashes={flashes}
      currentPath={currentPath}
      user={user}
      title={title}
    >
      <div className="inner">
        <h2>{tag || "Tags"}</h2>
        <ul className="tags">
          {tags.map((t) => {
            return (
              <li key={t._id} className="tag">
                <a
                  href={`/tags/${t._id}`}
                  className={`tag__link ${
                    t._id === tag ? "tag__link--active" : ""
                  }`}
                >
                  <span className="tag__text">{t._id}</span>
                  <span className="tag__count">{t._count}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <div className="stores">
          {stores.map((store) => {
            return <StoreCard key={store._id} store={store} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Tag;
