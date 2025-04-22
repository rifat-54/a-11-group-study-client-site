import React from "react";

const Card = ({ item }) => {
  const { title, description, img } = item;
  // console.log(img);
  return (
    <div className="card bg-base-100  shadow-xl">
  <figure>
    <img
    referrerPolicy="no-referrer"
    className=" h-40 rounded-md"
      src={img}
      alt="img" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    
  </div>
</div>
  );
};

export default Card;
