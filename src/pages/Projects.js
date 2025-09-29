import React, { useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");

  const addProject = () => {
    if (!title) return;
    setProjects([...projects, { title, desc, img }]);
    setTitle("");
    setDesc("");
    setImg("");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Projects</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginRight: "1rem" }}
      />
      <input
        type="text"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        style={{ marginRight: "1rem" }}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />
      <button onClick={addProject} style={{ marginLeft: "1rem" }}>Add</button>

      <div style={{ marginTop: "2rem" }}>
        {projects.map((p, i) => (
          <div key={i} style={{ marginBottom: "2rem" }}>
            <h3>{p.title}</h3>
            <div style={{ display: "flex", alignItems: "center" }}>
              {p.img && <img src={p.img} alt="project" width="200" style={{ marginRight: "1rem" }} />}
              <p>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
