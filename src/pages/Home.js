import React from "react";
import Kelly from "../images/kelly.jpg";
import Kelly2 from "../images/kelly2.jpg";
import TypingText from "../components/TypingText";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      <h2>
        <TypingText text="Hi, I'm Kelly Jia!" speed={120} />
      </h2>
      <div className="side-by-side">
        <img src={Kelly} width="400" height="500" alt="Kelly" />
        <p>
          I’m a freshman at UCLA studying Mathematics of Computation from the Bay Area. My
          interest in computer science began with a Taylor Swift fan page I built using
          HTML/CSS, and has expanded to full-stack development and computer vision. My research 
          interests include leveraging large-scale medical data
          to train models that improve early detection of pancreatic cancer. I’m passionate
          about creating impactful solutions—check out my Activities and Projects/Work tabs to see
          what I’ve been working on!
          <br /><br />
          kellyjia@g.ucla.edu
        </p>
        <img src={Kelly2} width="400" height="500" alt="Kelly" />
      </div>
    </div>
  );
}

export default Home;
