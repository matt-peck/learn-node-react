import React from "react";
import Layout from "./Layout";

const TopStores = ({ flashes, currentPath, user, title, stores }) => {
  return (
    <Layout
      flashes={flashes}
      currentPath={currentPath}
      user={user}
      title={title}
    >
      <div className="inner">
        <h2>Top {stores.length} Stores</h2>
        <table className="table">
          <thead>
            <td>photo</td>
            <td>ranking</td>
            <td>name</td>
            <td>reviews</td>
            <td>Average Rating</td>
          </thead>
          <tbody>
            {stores.map((store, index) => {
              return (
                <tr key={store._id}>
                  <td>
                    <a href={`/store/${store.slug}`}>
                      <img
                        src={`/uploads/${store.photo || "store.png"}`}
                        alt={store.name}
                        width="200"
                      />
                    </a>
                  </td>
                  <td>{index + 1}</td>
                  <td>
                    <a href={`/store/${store.slug}`}>{store.name}</a>
                  </td>
                  <td>{store.reviews.length}</td>
                  <td>{Math.round(store.averageRating * 10) / 10} / 5</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default TopStores;
