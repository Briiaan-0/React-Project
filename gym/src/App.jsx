import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import MiFit from "./components/pages/mifit/MiFit";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/MiFit" element={<MiFit />} />
          <Route path="/MiFit" element={<MiFit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
