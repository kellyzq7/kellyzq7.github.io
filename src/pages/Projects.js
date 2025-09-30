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
    description: "This is a short description of Project 1. Replace with your own text.",
    image: Skystone,
  },
  {
    title: "MYND App",
    description: "devpost: https://devpost.com/software/mynd, youtube tutorial: https://youtu.be/f8FpH8RRE-0",
    image: MYND,
  },
  {
    title: "Cul Cavboj",
    description: "This is a short description of Project 3. Replace with your own text.",
    image: RPG,
  },
  {
    title: "Marchup Software Development Intern",
    description: "This is a short description of Project 4. Replace with your own text.",
    image: Marchup,
  },
  {
    title: "PetMap Software Engineer",
    description: "This is a short description of Project 4. Replace with your own text.",
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
            <img src={project.image} alt={project.title} className="project-image" />
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
