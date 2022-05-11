import "./App.css";
import Section1 from "./Page/Section1";
import { Route, Routes } from "react-router-dom";
import Ucapan from "./Page/Ucapan";
import Section2Non from "./Page/Section2Non";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Section1 />} />
        <Route path="/m" element={<Section2Non />} />
        <Route path="/:undangan" element={<Section1 />} />
        <Route path="/m/:undangan" element={<Section2Non />} />
        <Route path="/admin/ucapan" element={<Ucapan />} />
      </Routes>
    </>
  );
}

export default App;
