import React from "react";
import "../styles/Extras.css";

const extrasData = [
  { img: "https://via.placeholder.com/200x200", desc: "Description 1" },
  { img: "https://via.placeholder.com/250x150", desc: "Description 2" },
  { img: "https://via.placeholder.com/150x250", desc: "Description 3" },
  { img: "https://via.placeholder.com/200x180", desc: "Description 4" },
  { img: "https://via.placeholder.com/180x200", desc: "Description 5" },
  { img: "https://via.placeholder.com/220x150", desc: "Description 6" },
];

const Extras = () => {
  return (
    <div className="collage-container">
      {extrasData.map((item, index) => (
        <div key={index} className={`collage-card card-${index}`}>
          <img src={item.img} alt={`Extra ${index}`} />
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Extras;
