import React from "react";
import Icon from "./Icon";

const StoreCard = ({ store, user }) => {
  const heartStrings = user?.hearts.map((obj) => obj.toString());
  const heartClass = heartStrings?.includes(store._id.toString())
    ? "heart__button--hearted"
    : "";
  const isUserAuthor = user && String(store.author) === String(user._id);

  return (
    <div className="store">
      <div className="store__hero">
        <div className="store__actions">
          {user && (
            <div className="store__action store__action--heart">
              <form
                action={`/api/stores/${store._id}/heart`}
                method="POST"
                className="heart"
              >
                <button
                  type="submit"
                  name="heart"
                  className={`heart__button ${heartClass}`}
                >
                  <Icon icon="heart" />
                </button>
              </form>
            </div>
          )}
          {isUserAuthor && (
            <div className="store__action store__action--edit">
              <a href={`/stores/${store._id}/edit`}>
                <Icon icon="pencil" />
              </a>
            </div>
          )}
          {store.reviews && (
            <div className="store__action store__action--count">
              <Icon icon="review" />
              <span>{store.reviews.length}</span>
            </div>
          )}
        </div>
        <img src={`/uploads/${store.photo || "store.png"}`} alt={store.name} />
        <h2 className="title">
          <a href={`/store/${store.slug}`}>{store.name}</a>
        </h2>
      </div>
      <div className="store__details">
        <p>{store.description.split(" ").slice(0, 25).join(" ")}</p>
      </div>
    </div>
  );
};

export default StoreCard;
