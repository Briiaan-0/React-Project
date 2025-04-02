import React, { useState } from "react";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import "./Routine.css";

const exercises = [
    { id: 1, name: "Press de banca" },
    { id: 2, name: "Sentadillas" },
    { id: 3, name: "Peso muerto" },
    { id: 4, name: "Dominadas" },
    { id: 5, name: "Fondos" },
];

const Routine = () => {
    const [routine, setRoutine] = useState([]);
    const [selectedExercise, setSelectedExercise] = useState("");
    const [series, setSeries] = useState(3);
    const [weight, setWeight] = useState(0);

    const addExercise = () => {
        if (!selectedExercise) return;

        const newExercise = {
            id: Date.now(),
            name: selectedExercise,
            series,
            weight,
        };

        setRoutine([...routine, newExercise]);
        setSelectedExercise("");
        setSeries(3);
        setWeight(0);
    };

    const updateExercise = (id, field, value) => {
        setRoutine(
            routine.map((exercise) =>
                exercise.id === id ? { ...exercise, [field]: value } : exercise
            )
        );
    };

    return (
        <>
            <Header />
            <div className="routine-container">
                <h1>Crear Rutina</h1>
                <select value={selectedExercise} onChange={(e) => setSelectedExercise(e.target.value)}>
                    <option value="">Selecciona un ejercicio</option>
                    {exercises.map((exercise) => (
                        <option key={exercise.id} value={exercise.name}>
                            {exercise.name}
                        </option>
                    ))}
                </select>
                <input
                    type="number"
                    value={series}
                    onChange={(e) => setSeries(Number(e.target.value))}
                    placeholder="Series"
                />
                <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    placeholder="Peso (kg)"
                />
                <button onClick={addExercise}>Agregar Ejercicio</button>

                <h2>Mi Rutina</h2>
                <ul>
                    {routine.map((exercise) => (
                        <li key={exercise.id}>
                            {exercise.name} - {exercise.series} series - {exercise.weight} kg
                            <input
                                type="number"
                                value={exercise.series}
                                onChange={(e) => updateExercise(exercise.id, "series", Number(e.target.value))}
                            />
                            <input
                                type="number"
                                value={exercise.weight}
                                onChange={(e) => updateExercise(exercise.id, "weight", Number(e.target.value))}
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </>
    );
};

export default Routine;
