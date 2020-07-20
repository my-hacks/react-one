import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./styles.css";

function App() {
  const { repositories, setRepositories } = useState([
    "Emerson",
    "Maria",
    "jose",
  ]);

  useEffect(() => {
    handleAddRepository();
    handleAddRepository();
  }, []);

  async function handleAddRepository() {
    //TODO: change for POST method
    const response = await api.post("/repositories", {
      url: "github.com/emersonjds",
      title: "React JS",
      techs: ["React JS", "React Native"],
    });

    const { data } = response.data;
    // setRepositories(...repositories, data);
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
        <li>{repositories}</li>
        {/* {repositories.map((repository) => (
          <li key={repository.id}>
            {repository.title}
            <button onClick={() => handleRemoveRepository(1)}>Remover</button>
          </li>
        ))} */}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
