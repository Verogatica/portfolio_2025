import React from "react";

const Card = ({ imageUrl, title }) => {
  return (
    <div className="card-containerr">
      <img
        src={imageUrl}
        className="img-fluid card-img" 
        alt={title}
      />
    </div>
  );
};

export default Card;
