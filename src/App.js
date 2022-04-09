import "./App.css";
import Section1 from "./Page/Section1";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Section1 />} />
        <Route path="/:undangan" element={<Section1 />} />
      </Routes>
    </>
  );
}

export default App;
