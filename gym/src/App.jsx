import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import MiFit from "./components/pages/MiFit/MiFit";
import Routine from "./components/pages/routines/Routine";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/MiFit" element={<MiFit />} />
          <Route path="/Routine" element={<Routine />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
