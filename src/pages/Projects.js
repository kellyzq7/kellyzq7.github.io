// ActivitiesPage.js
import React from "react";
import Card from "../components/Card";
import "../styles/Activities.css";
import TypingText from "../components/TypingText";

const ActivitiesPage = () => {
  const activities = [
    {
      title: "Marchup Software Development Intern",
      description: "This is a description for Activity 1.",
      images: ["/images/act1-1.jpg", "/images/act1-2.jpg", "/images/act1-3.jpg"],
    },
    {
      title: "PetMap Software Engineer",
      description: "This is a description for Activity 2.",
      images: ["/images/act2-1.jpg", "/images/act2-2.jpg", "/images/act2-3.jpg"],
    },
    {
      title: "Skystone Object Detection",
      description: "This is a description for Activity 2.",
      images: ["/images/act2-1.jpg", "/images/act2-2.jpg", "/images/act2-3.jpg"],
    },
    {
      title: "MYND App",
      description: "This is a description for Activity 2.",
      images: ["/images/act2-1.jpg", "/images/act2-2.jpg", "/images/act2-3.jpg"],
    },
    {
      title: "Cul Cavboj",
      description: "This is a description for Activity 2.",
      images: ["/images/act2-1.jpg", "/images/act2-2.jpg", "/images/act2-3.jpg"],
    },
  ];

  return (
    <div>
      <h2>
        <TypingText text="Projects / W*rk" speed={120} />
      </h2>
      {activities.map((act, index) => (
        <Card
          key={index}
          title={act.title}
          description={act.description}
          images={act.images}
        />
      ))}
    </div>
  );
};

export default ActivitiesPage;
