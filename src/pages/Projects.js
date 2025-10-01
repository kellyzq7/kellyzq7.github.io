import React from "react";
import "../styles/Projects.css";
import TypingText from "../components/TypingText";
import Skystone from "../images/skystone.png";
import MYND from "../images/mynd.png";
import RPG from "../images/rpg.png";
import Marchup from "../images/Marchup.png";
import PetMap from "../images/petmap.png";


const projectsData = [
  {
    title: "Skystone Object Detection",
    description: (
      <>
        My first taste of computer vision with Tensorflow. I had to work on a tight schedule and was still able to train and optimize my model from 24% → 99% accuracy. 
      </>
    ),
    image: Skystone,
  },
  {
    title: "MYND App",
    description: (
      <>
        I locked in and, with no prior experience, learned Swift and built <a href="https://youtu.be/f8FpH8RRE-0" target="_blank" rel="noreferrer">MYND</a> through the course of this virtual hackathon and won First Place Overall and Best Social Good Hack. (I won cool gaming headsets but I don't game). 
      </>
    ),
    image: MYND,
  },
  {
    title: "Marchup Software Development Intern",
    description: "My first internship! I learned so much this summer working in a professional environment. I strengthened PHP skills and used the Yii 2.0 framework. It was very fulfilling to see my work reflected in the product. I also helped the CEO Harsh with his startup outreach and partnerships - went to a conference at the MLK Library in San Jose.",
    image: Marchup,
  },
  {
    title: "Cul Cavboj",
    description: "Cul Cavboj is Cool Cowboy in Slovenian. I designed and developed this western RPG game with PHP, SQL, Javascript. Check out my Github to see more!",
    image: RPG,
  },
  {
    title: "PetMap Software Engineer",
    description: "I'm currently working on a startup founded by UCSD grads. Besides technical skills, I've learned a lot about the product development process as we build this from the ground up.",
    image: PetMap,
  },
];

function Projects() {
  return (
    <div className="projects-page">
      <h3>
        <TypingText text="Projects / W*rk" speed={120} />
      </h3>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <h2 className="project-card-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <img src={project.image} alt={project.title} className="project-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
