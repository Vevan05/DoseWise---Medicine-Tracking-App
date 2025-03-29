import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Scanner.css";
import { FaCamera, FaUpload, FaImage } from "react-icons/fa";

const Scanner = () => {
    const [showModal, setShowModal] = useState(false);
    const [medicineName, setMedicineName] = useState("");
    const [dosage, setDosage] = useState("");
    const [timing, setTiming] = useState("");

    const handleAddMedicine = () => {
        console.log("Medicine:", medicineName, "Dosage:", dosage, "Timing:", timing);
        setShowModal(false);
        setMedicineName("");
        setDosage("");
        setTiming("");
    };

    return (
        <div className='scanner-container'>
            <div className="header">
                <nav className="nav-links">
                    <span className="head">DoseWise</span>
                    <Link to="/user" className="nav-link">Medicine Schedule</Link>
                    <a href="/a" className="nav-link">Prescription Status</a>
                    <a href="/b" className="nav-link">Order History</a>
                    <a href="/c" className="nav-link">Medicine History</a>
                </nav>
            </div>

            <p className='heads'>Prescription Scanner</p>

            <div className="scan-box">
                <FaCamera className="scan-icon" />
                <p className="scan-text">Place your prescription here</p>
            </div>

            <div className="extra-options">
                <button className="option-btn"><FaUpload /> Upload Image</button>
                <button className="option-btn"><FaImage /> View Past Scans</button>
            </div>

            <button className="scan-button">Scan Prescription</button>

            <div className="divider">
                <div className="line"></div>
                <span className="text">OR</span>
                <div className="line"></div>
            </div>

            <button className="add-medicine-button" onClick={() => setShowModal(true)}>
                + Add Medicine
            </button>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Add Medicine</h2>
                        <input
                            type="text"
                            placeholder="Medicine Name"
                            value={medicineName}
                            onChange={(e) => setMedicineName(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Times per Day"
                            value={dosage}
                            onChange={(e) => setDosage(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Timing (e.g., Morning, Afternoon, Night)"
                            value={timing}
                            onChange={(e) => setTiming(e.target.value)}
                        />
                        <div className="modal-buttons">
                            <button onClick={handleAddMedicine}>Add</button>
                            <button onClick={() => setShowModal(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Scanner;
