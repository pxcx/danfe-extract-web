import { useState } from "react";

function App() {
  return (
    <div className="App">
      <h1>Danfe Extract</h1>

      <p>Adicione um arquivo .zip contendo todos os arquivos .xml</p>
      <p>
        <input type="file" name="userZipFile" />
      </p>
      <button>Enviar</button>
    </div>
  );
}

export default App;
