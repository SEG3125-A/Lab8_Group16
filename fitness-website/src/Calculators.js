import React, { useState } from 'react';
import './Calculators.css';

function Calculators() {
    const [heightValueBMI, setHeightValueBMI] = useState('');
    const [weightValueBMI, setWeightValueBMI] = useState('');
    const [ageValue, setAgeValue] = useState('');
    const [fatValue, setFatValue] = useState('');
    const [genderValue, setGenderValue] = useState('male'); // default to male
    const [bmiValue, setBmiValue] = useState('');
    const [bmiMessage, setBmiMessage] = useState('');
    const [bmrValue, setBmrValue] = useState('');
    const [bmrMessage, setBmrMessage] = useState('');

    const calculateBmi = () => {
        if (heightValueBMI && weightValueBMI) {
            const heightInMeters = heightValueBMI / 100;
            const bmi = (weightValueBMI / (heightInMeters * heightInMeters)).toFixed(2);
            setBmiValue(bmi);

            let message = '';
            if (bmi < 18.5) {
                message = 'You are Underweight';
            } else if (bmi >= 18.5 && bmi < 25) {
                message = 'You are Normal weight';
            } else if (bmi >= 25 && bmi < 30) {
                message = 'You are Overweight';
            } else {
                message = 'You are Obese';
            }
            setBmiMessage(message);
        } else {
            setBmiValue('');
            setBmiMessage('');
        }
    };

    const calculateBmr = () => {
        if (heightValueBMI && weightValueBMI && ageValue && genderValue && fatValue) {
            let bmr = 0;

            if (genderValue === 'male') {
                bmr = 13.397 * weightValueBMI + 4.799 * heightValueBMI - 5.677 * ageValue + 88.362 * (1 - fatValue / 100);
            } else {
                bmr = 9.247 * weightValueBMI + 3.098 * heightValueBMI - 4.330 * ageValue + 447.593 * (1 - fatValue/ 100);
            }
            setBmrValue(bmr.toFixed(2));

            let message = '';
            // You can add more specific messages based on BMR ranges if needed
            message = 'Your Basal Metabolic Rate (BMR):';
            setBmrMessage(message);
        } else {
            setBmrValue('');
            setBmrMessage('');
        }
    };

    return (
        <div className="container">
            <div className="calculator-section">
                <h2>BMI Calculator</h2>
                <div className="input-container">
                    <label htmlFor="height">Enter Your Height (cm):</label>
                    <input
                        type="number"
                        id="height"
                        value={heightValueBMI}
                        onChange={(e) => setHeightValueBMI(e.target.value)}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="weight">Enter Your Weight (kg):</label>
                    <input
                        type="number"
                        id="weight"
                        value={weightValueBMI}
                        onChange={(e) => setWeightValueBMI(e.target.value)}
                    />
                </div>
                <button className="calculate-btn" onClick={calculateBmi}>
                    Calculate BMI
                </button>
                {bmiValue && bmiMessage && (
                    <div className="result">
                        <p>
                            Your BMI: <span className="bmi-value">{bmiValue}</span>
                        </p>
                        <p>
                            Result: <span className="bmi-message">{bmiMessage}</span>
                        </p>
                    </div>
                )}
            </div>
            <div className="calculator-section">
                <h2>BMR Calculator</h2>
                <div className="input-container">
                    <label htmlFor="age">Enter Your Age:</label>
                    <input
                        type="number"
                        id="age"
                        value={ageValue}
                        onChange={(e) => setAgeValue(e.target.value)}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="gender">Select Your Gender:</label>
                    <select
                        id="gender"
                        value={genderValue}
                        onChange={(e) => setGenderValue(e.target.value)}
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="input-container">
                    <label htmlFor="bmr-height">Enter Your Height (cm):</label>
                    <input
                        type="number"
                        id="bmr-height"
                        value={heightValueBMI}
                        onChange={(e) => setHeightValueBMI(e.target.value)}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="bmr-weight">Enter Your Weight (kg):</label>
                    <input
                        type="number"
                        id="bmr-weight"
                        value={weightValueBMI}
                        onChange={(e) => setWeightValueBMI(e.target.value)}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="bmr-fat-percentage">Enter Your Body Fat Percentage:</label>
                    <input
                        type="number"
                        id="bmr-fat-percentage"
                        value={fatValue}
                        onChange={(e) => setFatValue(e.target.value)}
                    />
                </div>
                <button className="calculate-btn" onClick={calculateBmr}>
                    Calculate BMR
                </button>
                {bmrValue && bmrMessage && (
                    <div className="result">
                        <p>
                            {bmrMessage} <span className="bmi-value">{bmrValue}</span>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Calculators;

