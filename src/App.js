import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./styles.css";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // handleAddRepository();
    api.get("/repositories").then((response) => {
      setProjects([...projects, response.data]);
      // setRepositories([...repositories, response.data]);
    });
  }, []);

  async function handleAddRepository() {
    //TODO: change for POST method
    const response = await api.post("/repositories", {
      url: "github.com/emersonjds",
      title: "Desafio ReactJS",
      techs: ["React JS", "React Native"],
    });

    const { data } = response.data;
    setProjects([...projects, data]);
    console.log(projects);
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {projects &&
          projects.map((project) => (
            <li key={project.id}>
              {project.title}
              {project.id ? (
                <button onClick={() => handleRemoveRepository(1)}>
                  Remover
                </button>
              ) : (
                ""
              )}
            </li>
          ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
