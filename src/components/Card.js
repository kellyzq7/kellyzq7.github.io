import React from "react";
import "../styles/Card.css";

const ActivityProjectCard = ({ title, description, images }) => {
  return (
    <div className="card-container">
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <div className="card-images">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`img-${index}`} className="card-img" />
        ))}
      </div>
    </div>
  );
};

export default ActivityProjectCard;
