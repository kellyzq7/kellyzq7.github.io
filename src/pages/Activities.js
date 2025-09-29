import React, { useState } from "react";

function Activities() {
  const [activities, setActivities] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");

  const addActivity = () => {
    if (!title) return;
    setActivities([...activities, { title, desc, img }]);
    setTitle("");
    setDesc("");
    setImg("");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Activities</h1>
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
      <button onClick={addActivity} style={{ marginLeft: "1rem" }}>Add</button>

      <div style={{ marginTop: "2rem" }}>
        {activities.map((a, i) => (
          <div key={i} style={{ marginBottom: "2rem" }}>
            <h3>{a.title}</h3>
            <div style={{ display: "flex", alignItems: "center" }}>
              {a.img && <img src={a.img} alt="activity" width="200" style={{ marginRight: "1rem" }} />}
              <p>{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activities;
