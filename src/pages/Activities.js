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
      title: "Viking Hacks Founder",
      description: (
      <>
      2/15/25 and 2/10/24 | We had 5 months and a dream. After dozens of cold emails for money, judges, workshop mentors, we pulled off Irvington's <b>first</b> ever hackathon. 16 hours of building, free food, guest speakers. <br /><br /> <b>Highlight:</b> Stalling the closing ceremony for final judging score tallies with a motivational speech and CS jokes.
      </>
      ),
      images: [VH1, VH2, VH3],
    },
    {
      title: "Ohlone Hacks 2024 Lead Organizer",
      description: (
      <>
      4/14/24 | College kids (Associated Students of Ohlone College) came to us for help to revive their annual Ohlone Hacks hackathon after the success of Viking Hacks 2024. <br /><br /> <b>Highlight:</b> Networking with our sponsors like Marchup and dabbL.ai and learning more about their company. I landed my internship at Marchup through this.
      </>
      ),
      images: [OH1, OH2, OH3],
    },
    {
      title: "Math Club President",
      description: (
      <>
      Humble Beginnings: I started as Publicity Officer then worked my way up to President. Maybe it was my stellar leadership skills, but more so the fact that I loved Math Club like my firstborn child and did everything I could to watch it succeed (2x followers, 3x members) <br /><br /> <b>Highlight:</b> Pi Day Parties or my Drunk Calculus lecture series.
      </>
      ),
      images: [MC1, MC2, MC3],
    },
    {
      title: "Associated Student Government VP",
      description: (
      <>
      Throughout my time as Sophomore and Junior Class Officer then Student Body Vice President, I probably spent 500+ hours on homecoming decorations and finessed my way to $1,000+ worth of free materials like paint. <br /><br /> <b>Highlight:</b> Winning First Place as juniors, a historic victory over the senior class.
      </>
      ),
      images: [ASG1, ASG2, ASG3],
    },
    {
      title: "Book Club Founder",
      description: (
      <>
      Book Club is my firstborn child. I created it November of my freshman year of high school to foster a community of bookworms on campus and it has grown into a club of 138+ more than I could have ever hoped. <br /><br /> <b>Highlight:</b> Shipping our Holiday Book Drive books out to the kids who need it most.
      </>
      ),
      images: [BC1, BC2, BC3],
    },
    {
      title: "Berkeley ATDP TA",
      description: (
      <>
      Ever since I was a web design student I always thought it would be so cool to be a TA...so I became one. TAing for web design and web dev made those summers the best ever. <br /><br /> <b>Highlight:</b> Becoming besties with my all girl group or watching Stranger Things Season 4 with the other TAs on my birthday.
      </>
      ),
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
