// ActivitiesPage.js
import React from "react";
import Card from "../components/Card";
import "../styles/Activities.css";
import TypingText from "../components/TypingText";
import VH1 from "../images/vh1.jpg";
import VH2 from "../images/vh2.jpg";
import VH3 from "../images/vh3.jpg";


const ActivitiesPage = () => {
  const activities = [
    {
      title: "Viking Hacks 2025 and 2024",
      description: "I founded and MC’d Irvington High School’s first student-run hackathon, securing $10,000+ in sponsorships from organizations like Palo Alto Networks, LaunchX, and Art of Problem Solving to keep the event free. I also organized logistics for 200+ participants, arranged guest speakers, and helped debug during the 9-hour hacking sessions.",
      images: [VH1, VH2, VH3],
    },
    {
      title: "Ohlone Hacks 2024",
      description: "This is a description for Activity 2.",
      images: ["/images/act2-1.jpg", "/images/act2-2.jpg", "/images/act2-3.jpg"],
    },
    {
      title: "Associated Student Government",
      description: "This is a description for Activity 2.",
      images: ["/images/act2-1.jpg", "/images/act2-2.jpg", "/images/act2-3.jpg"],
    },
    {
      title: "Math Club",
      description: "This is a description for Activity 2.",
      images: ["/images/act2-1.jpg", "/images/act2-2.jpg", "/images/act2-3.jpg"],
    },
    {
      title: "Book Club",
      description: "This is a description for Activity 2.",
      images: ["/images/act2-1.jpg", "/images/act2-2.jpg", "/images/act2-3.jpg"],
    },
    {
      title: "Berkeley ATDP",
      description: "This is a description for Activity 2.",
      images: ["/images/act2-1.jpg", "/images/act2-2.jpg", "/images/act2-3.jpg"],
    },
  ];

  return (
    <div>
      <h2>
        <TypingText text="Activities" speed={120} />
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
