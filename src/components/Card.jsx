import React from "react";

const Card = ({ item }) => {
  const { title, description, img } = item;
  return (
    <div className="card bg-base-100  shadow-xl">
  <figure>
    <img
    className=" h-40 rounded-md"
      src={img}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    
  </div>
</div>
  );
};

export default Card;
