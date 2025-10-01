import React from "react";
import "../styles/Projects.css";
import TypingText from "../components/TypingText";
import Skystone from "../images/skystone.png";
import MYND from "../images/mynd.png";
import RPG from "../images/rpg.png";
import Marchup from "../images/Marchup2.png";
import PetMap from "../images/petmap.png";


const projectsData = [
  {
    title: "Skystone Object Detection",
    description: (
      <>
        My first taste of computer vision with Tensorflow. I had to work on a tight schedule and was still able to train and optimize my model from 24% → 99% accuracy. Read my documentation <a href="https://drive.google.com/file/d/1dIvna5Zl8rmwxJZTFrPbT5ubQsGd5Kkq/view?usp=sharing">here</a>.
      </>
    ),
    image: Skystone,
  },
  {
    title: "MYND App",
    description: (
      <>
        I learned Swift to built MYND and won First Place Overall and Best Social Good Hack (+ got cool gaming headsets). I had no previous experience in app dev or Swift. Check out my Github and watch my Youtube demo <a href="https://youtu.be/f8FpH8RRE-0">here</a>! 
      </>
    ),
    image: MYND,
  },
  {
    title: "Marchup Software Development Intern",
    description: "My first internship! I learned so much this summer, working in PHP Yii 2.0, SQL, Javascript. It was very fulfilling to see my work reflected in the product. I also helped the CEO Harsh with startup outreach events.",
    image: Marchup,
  },
  {
    title: "Cul Cavboj",
    description: (
      <>
      Cul Cavboj is Cool Cowboy in Slovenian. I designed and developed this western RPG game with PHP, SQL, Javascript. Check out our design doc <a href="https://www.figma.com/design/E428dlZTBMUQJVW9EgckHb/AIC-P2-Design-Document?node-id=0-1&t=zqBKkPAcrfEP8xnU-1">here</a> and my Github to see more!
      </>
    ),
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
