import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import MiFit from "./components/pages/MiFit/MiFit";
import Routine from "./components/pages/routines/Routine";
import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Intentando obtener datos de Firestore...");
        const querySnapshot = await getDocs(collection(db, "testCollection"));

        if (querySnapshot.empty) {
          console.log("No hay documentos en la colección.");
        } else {
          querySnapshot.forEach((doc) => {
            console.log("Documento encontrado:", doc.id, doc.data());
          });
        }
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/MiFit" element={<MiFit />} />
        <Route path="/Routine" element={<Routine />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

