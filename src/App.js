import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    // handleAddRepository();
    api.get("/repositories").then((response) => {
      setRepositories(response.data);
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
    setRepositories([...repositories, data]);
    console.log(repositories);
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories &&
          repositories.map((repository) => (
            <li key={repository.id}>
              {repository.title}
              {repository.id ? (
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
