import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import UploadForm from "./components/UploadForm";
import DisplayExtract from "./components/DisplayExtract";

function App() {
  return (
    <div className="App">
      <h1>Danfe Extract</h1>

      <Router>
        <Routes>
          <Route path="/" element={<UploadForm />} />
          <Route path="/package/:packageID" element={<DisplayExtract />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
