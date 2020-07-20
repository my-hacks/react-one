import React, { useState, useEffect } from "react";
import axios from "axios";

import "./styles.css";

function App() {
  const { data, setData } = useState([]);

  useEffect(() => {
    handleAddRepository();
  }, []);

  async function handleAddRepository() {
    //TODO: change for POST method
    const response = await axios.get("/projects/").then((res) => res.json());
    setData(...data, response.data);
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
