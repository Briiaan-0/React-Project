import "./MiFit.css";
import React, { useState } from "react";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";

const CalorieCalculator = () => {
    const [formData, setFormData] = useState({
        weight: "",
        height: "",
        age: "",
        gender: "male",
        activity: 1.2, // Valor predeterminado para actividad sedentaria
    });
    const [calories, setCalories] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const calculateCalories = () => {
        const { weight, height, age, gender, activity } = formData;
        if (!weight || !height || !age) {
            alert("Por favor, completa todos los campos");
            return;
        }

        let bmr =
            gender === "male"
                ? 10 * weight + 6.25 * height - 5 * age + 5
                : 10 * weight + 6.25 * height - 5 * age - 161;

        setCalories(bmr * activity);
    };

    return (
        <div className="calculator-container">
            <h1>Calculadora de Calorías</h1>
            <div className="input-group">
                <label htmlFor="weight">Peso (kg):</label>
                <input type="number" id="weight" name="weight" value={formData.weight} onChange={handleChange} />
            </div>

            <div className="input-group">
                <label htmlFor="height">Altura (cm):</label>
                <input type="number" id="height" name="height" value={formData.height} onChange={handleChange} />
            </div>

            <div className="input-group">
                <label htmlFor="age">Edad:</label>
                <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} />
            </div>

            <div className="input-group">
                <label htmlFor="gender">Sexo:</label>
                <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
                    <option value="male">Masculino</option>
                    <option value="female">Femenino</option>
                </select>
            </div>

            <div className="input-group">
                <label htmlFor="activity">Nivel de actividad:</label>
                <select id="activity" name="activity" value={formData.activity} onChange={handleChange}>
                    <option value="1.2">Sedentario</option>
                    <option value="1.375">Ligero (ejercicio 1-3 veces/semana)</option>
                    <option value="1.55">Moderado (ejercicio 3-5 veces/semana)</option>
                    <option value="1.725">Intenso (ejercicio 6-7 veces/semana)</option>
                    <option value="1.9">Muy intenso (atleta)</option>
                </select>
            </div>

            <button className="calculate-btn" onClick={calculateCalories}>
                Calcular
            </button>

            {calories && <h2>Calorías necesarias: {calories.toFixed(2)}</h2>}
        </div>
    );
};

function MiFit() {
    return (
        <>
            <Header />
            <CalorieCalculator />
            <Footer />
        </>
    );
}

export default MiFit;
