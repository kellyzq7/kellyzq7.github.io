// ActivitiesPage.js
import React from "react";
import Card from "../components/Card";
import "../styles/Activities.css";
import TypingText from "../components/TypingText";
import VH1 from "../images/vh1.jpg";
import VH2 from "../images/vh2.jpg";
import VH3 from "../images/vh3.jpg";
import OH1 from "../images/OH1.jpg";
import OH2 from "../images/OH2.jpg";
import OH3 from "../images/OH3.JPG";
import ASG1 from "../images/asg1.png";
import ASG2 from "../images/asg2.png";
import ASG3 from "../images/asg3.png";
import MC1 from "../images/mc1.JPG";
import MC2 from "../images/mc2.JPG";
import MC3 from "../images/mc3.jpg";
import BC1 from "../images/bc1.JPG";
import BC2 from "../images/bc2.JPG";
import BC3 from "../images/bc3.JPG";
import ATDP1 from "../images/atdp1.jpg";
import ATDP2 from "../images/atdp2.JPG";
import ATDP3 from "../images/atdp3.jpg";

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
      images: [OH1, OH2, OH3],
    },
    {
      title: "Associated Student Government",
      description: "This is a description for Activity 2.",
      images: [ASG1, ASG2, ASG3],
    },
    {
      title: "Math Club",
      description: "This is a description for Activity 2.",
      images: [MC1, MC2, MC3],
    },
    {
      title: "Book Club",
      description: "This is a description for Activity 2.",
      images: [BC1, BC2, BC3],
    },
    {
      title: "Berkeley ATDP",
      description: "This is a description for Activity 2.",
      images: [ATDP1, ATDP2, ATDP3],
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
