import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Requests.css'; 

const Requests = () => {
    const [requests, setRequests] = useState([
        { id: 1, patientName: 'John Doe', medication: 'Ibuprofen 200mg', dosage: '1 tablet every 6 hours', status: 'pending' },
        { id: 2, patientName: 'Jane Smith', medication: 'Amoxicillin 500mg', dosage: '1 capsule every 8 hours', status: 'pending' },
        { id: 3, patientName: 'Robert Johnson', medication: 'Lisinopril 10mg', dosage: '1 tablet daily', status: 'pending' }
    ]);

    const handleAccept = (id) => {
        setRequests(requests.map(request => 
            request.id === id ? { ...request, status: 'approved' } : request
        ));
    };

    const handleReject = (id) => {
        setRequests(requests.map(request => 
            request.id === id ? { ...request, status: 'rejected' } : request
        ));
    };

    return (
        <div>
            <div className="header">
                <nav className="nav-links">
                <Link to = "/" className="head">DoseWise</Link>
                    <Link to="/sold" className="nav-link">Medicines Sold</Link>
                    <Link to="/view" className="nav-link">View Patients</Link>
                    <Link to="/" className="nav-link">Logout</Link>
                </nav>
            </div>

            <div className="requests-container">
                <h2>Prescription Verification Requests</h2>
                
                {requests.length === 0 ? (
                    <p>No pending requests at this time.</p>
                ) : (
                    <div className="requests-list">
                        {requests.map(request => (
                            <div key={request.id} className="request-card">
                                <div className="request-info">
                                    <h3>{request.patientName}</h3>
                                    <p><strong>Medication:</strong> {request.medication}</p>
                                    <p><strong>Dosage:</strong> {request.dosage}</p>
                                    <p><strong>Status:</strong> <span className={`status-${request.status}`}>{request.status}</span></p>
                                </div>
                                
                                {request.status === 'pending' && (
                                    <div className="request-actions">
                                        <button 
                                            onClick={() => handleAccept(request.id)}
                                            className="accept-btn"
                                        >
                                            Accept
                                        </button>
                                        <button 
                                            onClick={() => handleReject(request.id)}
                                            className="reject-btn"
                                        >
                                            Reject
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Requests;