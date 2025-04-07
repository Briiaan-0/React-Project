import { db } from "./firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

const testFirestore = async () => {
  try {
    // Agregar un documento de prueba
    await addDoc(collection(db, "test"), {
      mensaje: "¡Firestore está funcionando!",
      fecha: new Date(),
    });

    console.log("Documento agregado correctamente");

    // Leer documentos de la colección "test"
    const querySnapshot = await getDocs(collection(db, "test"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} =>`, doc.data());
    });
  } catch (error) {
    console.error("Error con Firestore:", error);
  }
};

// Llamar a la función de prueba
testFirestore();
