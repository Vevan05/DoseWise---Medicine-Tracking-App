import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './User.css';

const User = () => {
    const [medicines, setMedicines] = useState([
        { id: 1, name: 'Paracetamol', left: 10, days: ['Monday', 'Wednesday', 'Friday'] },
        { id: 2, name: 'Ibuprofen', left: 5, days: ['Tuesday', 'Thursday', 'Saturday'] },
        { id: 3, name: 'Amoxicillin', left: 7, days: ['Monday', 'Thursday', 'Sunday'] },
        { id: 4, name: 'Cetirizine', left: 12, days: ['Tuesday', 'Friday', 'Sunday'] },
        { id: 5, name: 'Metformin', left: 8, days: ['Monday', 'Wednesday', 'Saturday'] },
        { id: 6, name: 'Aspirin', left: 15, days: ['Thursday', 'Friday', 'Sunday'] },
        { id: 7, name: 'Omeprazole', left: 9, days: ['Monday', 'Wednesday', 'Saturday'] },
        { id: 8, name: 'Losartan', left: 6, days: ['Tuesday', 'Thursday', 'Sunday'] }
    ]);
    

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = daysOfWeek[new Date().getDay()];
    const [selectedDay, setSelectedDay] = useState(null);

    const toggleDayView = (day) => {
        setSelectedDay(selectedDay === day ? null : day);
    };

    const removeMedicine = (id) => {
        setMedicines(medicines.filter(medicine => medicine.id !== id));
    };

    return (
        <div className='user_container'>
            <div className="header">
                <nav className="nav-links">
                    <span className="head">DoseWise</span>
                    <Link to="/scanner" className="nav-link">Prescription Scanner</Link>
                    <Link to="/status" className="nav-link">Prescription Status</Link>
                    <Link to="/order" className="nav-link">Order History</Link>
                    <Link to="/history" className="nav-link">Medicine History</Link>
                </nav>
            </div>

            <p className='head'>
                {selectedDay 
                    ? (selectedDay === today ? 'Today Medicine Schedule' : `${selectedDay} Medicine Schedule`)
                    : 'Weekly Medicine Schedule'}
            </p>

            <div className="medicine-container">
                <table className={`medicine-table ${selectedDay ? 'selected' : ''}`}>
                    <thead>
                        <tr>
                            {(selectedDay ? [selectedDay] : daysOfWeek).map(day => (
                                <th 
                                    key={day} 
                                    className={selectedDay === day ? 'selected-day' : 'clickable-day'} 
                                    onClick={() => toggleDayView(day)}
                                >
                                    {day}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {(selectedDay ? [selectedDay] : daysOfWeek).map(day => (
                                <td key={day} className="medicine-list">
                                    {medicines
                                        .filter(medicine => medicine.days.includes(day))
                                        .map(med => (
                                            <div key={med.id} className="medicine-item">
                                                {med.name} ({med.left} left)
                                                <button className="remove-btn" onClick={() => removeMedicine(med.id)}>❌</button>
                                            </div>
                                        ))
                                    }
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default User;
