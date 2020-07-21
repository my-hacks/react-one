import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    getRepositories();
  }, []);

  async function getRepositories() {
    api.get("/repositories").then((response) => {
      setRepositories(response.data);
    });
  }

  async function handleAddRepository() {
    //TODO: change for POST method
    const response = await api.post("/repositories", {
      title: "Emerson",
      url: "https://github.com/emersonjds",
      techs: ["Node.js", "ReactJS"],
    });

    setRepositories([...repositories, response.data]);
  }

  async function handleRemoveRepository(id) {
    await api.delete(`/repositories/${id}`);
    setRepositories(repositories.filter((repository) => repository.id !== id));
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories &&
          repositories.map((repository) => {
            return (
              <p key={repository.id}>
                {repository.title}
                {repository.id ? (
                  <button onClick={() => handleRemoveRepository(repository.id)}>
                    Remover
                  </button>
                ) : (
                  ""
                )}
              </p>
            );
          })}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
