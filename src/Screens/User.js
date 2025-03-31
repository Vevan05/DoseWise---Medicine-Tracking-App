import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './User.css';

const User = () => {
    const [medicines, setMedicines] = useState([]);

    useEffect(() => {
        loadMedicines();
        window.addEventListener("storage", loadMedicines);
        return () => window.removeEventListener("storage", loadMedicines);
    }, []);

    useEffect(() => {
        const checkMedicineStatus = () => {
            const now = new Date();
            const currentTime = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;

            const medicineTimes = {
                "Morning": "10:00",
                "Afternoon": "15:00",
                "Evening": "18:00",
                "Night": "22:00",
                "Midnight": "00:00"
            };

            medicines.forEach(med => {
                med.timing.forEach(time => {
                    if (medicineTimes[time] === currentTime) {
                        alert(`⏰ Time to take ${med.name} (${med.dosage} dose)`);
                    }
                });

                if (med.stock <= 3) {
                    alert(`⚠️ Low stock alert! Only ${med.stock} doses left for ${med.name}.`);
                }
            });
        };

        const interval = setInterval(checkMedicineStatus, 60000);
        return () => clearInterval(interval);
    }, [medicines]);

    const loadMedicines = () => {
        setMedicines(JSON.parse(localStorage.getItem("medicines")) || []);
    };

    const removeMedicine = (id) => {
        const updatedMedicines = medicines.filter(med => med.id !== id);
        localStorage.setItem("medicines", JSON.stringify(updatedMedicines));
        setMedicines(updatedMedicines);
    };

    const markMedicineTaken = (id) => {
        const updatedMedicines = medicines.map(med => 
            med.id === id ? { ...med, stock: Math.max(med.stock - 1, 0) } : med
        );
        localStorage.setItem("medicines", JSON.stringify(updatedMedicines));
        setMedicines(updatedMedicines);
    };

    return (
        <div className='user_container'>
            <div className="header">
                <nav className="nav-links">
                    <span className="head">DoseWise</span>
                    <Link to="/scanner" className="nav-link">Medicine Scanner</Link>
                    <Link to="/status" className="nav-link">Prescription Status</Link>
                    <Link to="/order" className="nav-link">Order History</Link>
                    <Link to="/history" className="nav-link">Medicine History</Link>
                </nav>
            </div>

            <p className='head'>Weekly Medicine Schedule</p>

            <div className="medicine-container">
                <table className="medicine-table">
                    <thead>
                        <tr>
                            <th>Medicine</th>
                            <th>Dosage</th>
                            <th>Stock</th>
                            <th>Time</th>
                            <th>Action</th>
                            <th>Medicine Taken</th>
                        </tr>
                    </thead>
                    <tbody>
                        {medicines.map(med => (
                            <tr key={med.id}>
                                <td>{med.name}</td>
                                <td>{med.dosage}x per day</td>
                                <td>{med.stock}</td>
                                <td>{med.timing.join(", ")}</td>
                                <td>
                                    <button className="remove-btn" onClick={() => removeMedicine(med.id)}>❌</button>
                                </td>
                                <td>
                                    <button className="taken-btn" onClick={() => markMedicineTaken(med.id)}>✅</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;
