import "./App.css";
import Section1 from "./Page/Section1";
import { Route, Routes } from "react-router-dom";
import Ucapan from "./Page/Ucapan";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Section1 />} />
        <Route path="/:undangan" element={<Section1 />} />
        <Route path="/admin/ucapan" element={<Ucapan />} />
      </Routes>
    </>
  );
}

export default App;
