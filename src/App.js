import React, { useState, useEffect } from "react";
import axios from "axios";

import "./styles.css";

function App() {
  const { repositories, setRepositories } = useState([]);

  useEffect(() => {
    handleAddRepository();
    handleAddRepository();
  }, []);

  async function handleAddRepository() {
    //TODO: change for POST method
    const response = await axios.post("http://localhost:3333/repositories", {
      url: "github.com/emersonjds",
      title: "React JS",
      techs: ["React JS", "React Native"],
    });

    const { data } = response.data;
    console.log(data);
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
        <li>
          Repositório 1
          <button onClick={() => handleRemoveRepository(1)}>Remover</button>
        </li>
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
