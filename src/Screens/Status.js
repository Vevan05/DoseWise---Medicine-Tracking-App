import React, { useState } from 'react';

import {Link} from 'react-router-dom'
import './Status.css';

const Status = () => {
    const [prescriptions, setPrescriptions] = useState([
        { id: 1, name: 'Prescription 1', verified: false },
        { id: 2, name: 'Prescription 2', verified: true },
        { id: 3, name: 'Prescription 3', verified: false },
        { id: 4, name: 'Prescription 4', verified: true }
    ]);

    const cancelPrescription = (id) => {
        setPrescriptions(prescriptions.filter(prescription => prescription.id !== id));
    };

    return (
        <div className="status-container">

            <div className="header">
                <nav className="nav-links">
                    <span className='heads'>DoseWise</span>
                    <Link to="/scanner" className="nav-link">Medicine Scanner</Link>
                    <Link to="/user" className="nav-link">Medicine Schedule</Link>
                    <Link to="/order" className="nav-link">Order History</Link>
                    <Link to="/history" className="nav-link">Medicine History</Link>
                </nav>
            </div>
            <p className="head">Prescription Status</p>
            <Link className="new-prescription-btn" to = "/scanner" >New Prescription</Link>
            
            <div className="status-table-container">
                <table className="status-table">
                    <thead>
                        <tr>
                            <th>Prescription</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prescriptions.map(prescription => (
                            <tr key={prescription.id}>
                                <td>{prescription.name}</td>
                                <td className={prescription.verified ? 'verified' : 'pending'}>
                                    {prescription.verified ? 'Verified ✅' : 'Pending ⏳'}
                                </td>
                                <td>
                                    {!prescription.verified && (
                                        <button className="cancel-btn" onClick={() => cancelPrescription(prescription.id)}>
                                            ❌
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Status;
