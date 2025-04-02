import "./MiFit.css";
import React, { useState } from "react";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";

const CalorieCalculator = ({ setResults }) => {
    const [formData, setFormData] = useState({
        weight: "",
        height: "",
        age: "",
        gender: "male",
        activity: 1.2, // Actividad sedentaria
    });
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

        const maintenanceCalories = bmr * activity;
        const surplusCalories = maintenanceCalories + 500;
        const deficitCalories = maintenanceCalories - 500;

        setResults({ maintenanceCalories, surplusCalories, deficitCalories });
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
            <button className="calculate-btn" onClick={calculateCalories}>Calcular</button>
        </div>
    );
};

function MiFit() {
    const [results, setResults] = useState(null);
    return (
        <>
            <Header />
            <div className="layout-container">
                <CalorieCalculator setResults={setResults} />
                <div className="text-container">
                    <p><strong>Una <em>calculadora de calorías</em></strong> es una herramienta que estima la cantidad de calorías que una persona debe consumir diariamente según factores como edad, sexo, peso, altura y nivel de actividad física. Se basa en ecuaciones como la de <strong>Harris-Benedict</strong> o <strong>Mifflin-St Jeor</strong> para calcular el <strong>metabolismo basal (TMB)</strong> y ajustarlo según el gasto energético diario. Su objetivo es ayudar a mantener, perder o ganar peso de manera controlada.</p>
                    {results && (
                        <div className="results-container">
                            <h2>Resultados:</h2>
                            <p><strong>Calorias Diarias Necesarias Para Mantener Su Peso:</strong> {results.maintenanceCalories.toFixed(2)} kcal</p>
                            <p><strong>Calorias Diarias Necesarias Para Ganar Peso (Superavit):</strong> {results.surplusCalories.toFixed(2)} kcal</p>
                            <p><strong>Calorias Diarias Necesarias Para Perder Peso (Deficit):</strong> {results.deficitCalories.toFixed(2)} kcal</p>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MiFit;
