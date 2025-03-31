import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Sold.css'

const Sold = () => {
    const [soldMedicines, setSoldMedicines] = useState([
        { id: 1, name: 'Ibuprofen 200mg', quantity: 50, price: 5.99, date: '2023-05-15', patient: 'John Doe' },
        { id: 2, name: 'Amoxicillin 500mg', quantity: 30, price: 8.50, date: '2023-05-14', patient: 'Jane Smith' },
        { id: 3, name: 'Lisinopril 10mg', quantity: 20, price: 12.75, date: '2023-05-13', patient: 'Robert Johnson' },
        { id: 4, name: 'Metformin 1000mg', quantity: 40, price: 4.25, date: '2023-05-12', patient: 'Sarah Williams' }
    ]);

    return (
        <div>
            <div className="header">
                <nav className="nav-links">
                <Link to = "/" className="head">DoseWise</Link>
                    <Link to="/requests" className="nav-link">Prescription Verification</Link>
                    <Link to="/view" className="nav-link">View Patients</Link>
                    <Link to="/" className="nav-link">Logout</Link>
                </nav>
            </div>

            <div className="sold-container">
                <h2>Medicines Sold</h2>
                
                <div className="sales-summary">
                    <div className="summary-card">
                        <h3>Total Sales</h3>
                        <p>${soldMedicines.reduce((total, med) => total + (med.price * med.quantity), 0).toFixed(2)}</p>
                    </div>
                    <div className="summary-card">
                        <h3>Total Units Sold</h3>
                        <p>{soldMedicines.reduce((total, med) => total + med.quantity, 0)}</p>
                    </div>
                    <div className="summary-card">
                        <h3>Unique Medications</h3>
                        <p>{new Set(soldMedicines.map(med => med.name)).size}</p>
                    </div>
                </div>

                <div className="sales-table-container">
                    <table className="sales-table">
                        <thead>
                            <tr>
                                <th>Medicine Name</th>
                                <th>Quantity</th>
                                <th>Unit Price</th>
                                <th>Total</th>
                                <th>Date</th>
                                <th>Patient</th>
                            </tr>
                        </thead>
                        <tbody>
                            {soldMedicines.map(medicine => (
                                <tr key={medicine.id}>
                                    <td>{medicine.name}</td>
                                    <td>{medicine.quantity}</td>
                                    <td>${medicine.price.toFixed(2)}</td>
                                    <td>${(medicine.price * medicine.quantity).toFixed(2)}</td>
                                    <td>{medicine.date}</td>
                                    <td>{medicine.patient}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Sold;