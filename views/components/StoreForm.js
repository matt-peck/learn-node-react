import React from "react";

const StoreForm = ({ store = {} }) => {
  const choices = [
    "Wifi",
    "Open Late",
    "Family Friendly",
    "Vegatarian",
    "Licensed",
  ];
  const tags = store.tags || [];

  return (
    <form
      action={`/add/${store._id || ""}`}
      method="POST"
      className="card"
      encType="multipart/form-data"
    >
      <label htmlFor="name">Name</label>
      <input type="text" name="name" value={store.name} />
      <label htmlFor="description">Description</label>
      <textarea name="description" value={store.description} />
      <label htmlFor="photo">Photo</label>
      <input
        type="file"
        name="photo"
        id="photo"
        accept="image/gif, image/png, image/jpeg"
      />
      {store.photo && (
        <img src={`/uploads/${store.photo}`} alt={store.name} width="200" />
      )}
      <label htmlFor="address">Address</label>
      <input
        type="text"
        id="address"
        name="location[address]"
        value={store.location?.address}
      />
      <label htmlFor="lng">Address Lng</label>
      <input
        type="text"
        id="lng"
        name="location[coordinates][0]"
        value={store.location?.coordinates[0]}
        required
      />
      <label htmlFor="lat">Address Lat</label>
      <input
        type="text"
        id="lat"
        name="location[coordinates][1]"
        value={store.location?.coordinates[1]}
        required
      />
      <ul className="tags">
        {choices.map((choice) => {
          return (
            <div className="tag tag__choice">
              <input
                type="checkbox"
                name="tags"
                id={choice}
                value={choice}
                checked={tags.includes(choice)}
              />
              <label htmlFor={choice}>{choice}</label>
            </div>
          );
        })}
      </ul>
      <input type="submit" className="button" value="Save →" />
    </form>
  );
};

export default StoreForm;
