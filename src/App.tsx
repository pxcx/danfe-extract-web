import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import UploadForm from "./components/UploadForm";
import DisplayExtract from "./components/DisplayExtract";
import { useState } from "react";

function App() {
  const [easterEgg, setEasterEgg] = useState<string>("Iraci!");

  function handleEasterEggIn(event: any) {
    setEasterEgg("Pirizinha!");
  }

  function handleEasterEggOut(event: any) {
    setEasterEgg("Iraci!");
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Danfe Extract</h1>

      <Router>
        <Routes>
          <Route path="/" element={<UploadForm />} />
          <Route path="/package/:packageID" element={<DisplayExtract />} />
        </Routes>
      </Router>

      <p>
        Feito com{" "}
        <span style={{ color: "red", fontSize: 18, margin: "5px" }}> ♥ </span>
        para{" "}
        <span
          style={{ cursor: "pointer", color: "blue", fontWeight: "bold" }}
          onMouseEnter={handleEasterEggIn}
          onMouseLeave={handleEasterEggOut}
        >
          {easterEgg}
        </span>
      </p>
    </div>
  );
}

export default App;