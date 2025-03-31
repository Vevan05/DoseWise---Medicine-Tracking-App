import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './View.css';

const View = () => {
    const [patients, setPatients] = useState([
        { id: 1, name: 'John Doe', age: 45, gender: 'Male', lastVisit: '2023-05-15', condition: 'Hypertension' },
        { id: 2, name: 'Jane Smith', age: 32, gender: 'Female', lastVisit: '2023-05-14', condition: 'Diabetes' },
        { id: 3, name: 'Robert Johnson', age: 58, gender: 'Male', lastVisit: '2023-05-10', condition: 'Arthritis' },
        { id: 4, name: 'Sarah Williams', age: 29, gender: 'Female', lastVisit: '2023-05-08', condition: 'Migraine' }
    ]);

    return (
        <div>
            <div className="header">
                <nav className="nav-links">
                    <Link to = "/" className="head">DoseWise</Link>
                    <Link to="/requests" className="nav-link">Prescription Verification</Link>
                    <Link to="/sold" className="nav-link">Medicines Sold</Link>
                    <Link to="/" className="nav-link">Logout</Link>
                </nav>
            </div>

            <div className="view-container">
                <h2>Patient List</h2>
                
                <div className="patient-table-container">
                    <table className="patient-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Last Visit</th>
                                <th>Condition</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patients.map(patient => (
                                <tr key={patient.id}>
                                    <td>{patient.name}</td>
                                    <td>{patient.age}</td>
                                    <td>{patient.gender}</td>
                                    <td>{patient.lastVisit}</td>
                                    <td>{patient.condition}</td>
                                    <td>
                                        <Link to={`/patient/${patient.id}`} className="action-link">View Details</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default View;