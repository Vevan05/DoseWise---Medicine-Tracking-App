import React, { useState } from 'react';
import './History.css';
import { Link } from 'react-router-dom';

const MedicineHistory = () => {
    const [history, setHistory] = useState([
        { id: 1, name: 'Paracetamol', dateTaken: '2025-03-28' },
        { id: 2, name: 'Ibuprofen', dateTaken: '2025-03-27' },
        { id: 3, name: 'Amoxicillin', dateTaken: '2025-03-26' },
        { id: 4, name: 'Cetirizine', dateTaken: '2025-03-25' },
        { id: 5, name: 'Metformin', dateTaken: '2025-03-24' }
    ]);

    return (
        <div className="history-container">
            <div className="header">
                <nav className="nav-links">
                <Link to = "/" className="head">DoseWise</Link>
                    <Link to="/scanner" className="nav-link">Prescription Scanner</Link>
                    <Link to="/user" className="nav-link">Medicine Schedule</Link>
                    <Link to="/status" className="nav-link">Prescription Status</Link>
                    <Link to="/order" className="nav-link">Order History</Link>
                    <Link to = "/" className="nav-link"> Logout </Link>
                </nav>
            </div>

            <p className='head'>Medicine History</p>
            <div className="history-table-container">
                {history.length > 0 ? (
                    <table className="history-table">
                        <thead>
                            <tr>
                                <th>Medicine</th>
                                <th>Date Taken</th>
                            </tr>
                        </thead>
                        <tbody>
                            {history.map(entry => (
                                <tr key={entry.id}>
                                    <td>{entry.name}</td>
                                    <td>{entry.dateTaken}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="no-history">No medicine history available.</p>
                )}
            </div>
        </div>
    );
};

export default MedicineHistory;
