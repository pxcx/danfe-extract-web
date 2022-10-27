import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import UploadForm from "./components/UploadForm";
import DisplayExtract from "./components/DisplayExtract";
import { useState } from "react";

function App() {
  const [easterEgg, setEasterEgg] = useState<string>("Iraci!");

  function handleEasterEggIn(event: any) {
    setEasterEgg("Piririzinha!");
  }

  function handleEasterEggOut(event: any) {
    setEasterEgg("Iraci!");
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="text-3xl my-6 font-bold text-blue-700">Danfe Extract</h1>

      <Router>
        <Routes>
          <Route path="/" element={<UploadForm />} />
          <Route path="/package/:packageID" element={<DisplayExtract />} />
        </Routes>
      </Router>

      <p className="pb-10">
        Feito com <span className="text-red-500"> ♥ </span>
        para{" "}
        <span
          className="cursor-pointer text-blue-600 font-bold"
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
