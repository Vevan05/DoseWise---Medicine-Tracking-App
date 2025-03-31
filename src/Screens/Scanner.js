import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Scanner.css";
import { FaCamera, FaUpload, FaImage } from "react-icons/fa";

const Scanner = () => {
    const [showModal, setShowModal] = useState(false);
    const [medicineName, setMedicineName] = useState("");
    const [dosage, setDosage] = useState("");
    const [stock, setStock] = useState("");
    const [timing, setTiming] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const timeOptions = ["Morning", "Afternoon", "Evening", "Night", "Midnight"];

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleTimingChange = (value) => {
        setTiming(prev => 
            prev.includes(value) ? prev.filter(t => t !== value) : [...prev, value]
        );
    };

    const handleAddMedicine = () => {
        if (medicineName.trim() && dosage.trim() && timing.length > 0 && stock.trim()) {
            const newMedicine = {
                id: Date.now(),
                name: medicineName,
                dosage: dosage,
                timing: timing,
                stock: parseInt(stock, 10)
            };

            const storedMedicines = JSON.parse(localStorage.getItem("medicines")) || [];
            storedMedicines.push(newMedicine);
            localStorage.setItem("medicines", JSON.stringify(storedMedicines));

            window.dispatchEvent(new Event("storage"));

            setMedicineName("");
            setDosage("");
            setStock("");
            setTiming([]);
            setShowModal(false);
        }
    };

    return (
        <div className='scanner-container'>
            <div className="header">
                <nav className="nav-links">
                <Link to = "/" className="head">DoseWise</Link>
                    <Link to="/user" className="nav-link">Medicine Schedule</Link>
                    <Link to="/status" className="nav-link">Prescription Status</Link>
                    <Link to="/order" className="nav-link">Order History</Link>
                    <Link to="/history" className="nav-link">Medicine History</Link>
                    <Link to = "/" className="nav-link"> Logout </Link>
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

                        <div className="dropdown">
                            <div className="dropdown-header" onClick={toggleDropdown}>
                                {timing.length > 0 ? timing.join(", ") : "Select Timing"}
                                <span className={`arrow ${dropdownOpen ? "open" : ""}`}>&#9662;</span>
                            </div>
                            {dropdownOpen && (
                                <div className="dropdown-options">
                                    {timeOptions.map((time) => (
                                        <label key={time} className="dropdown-option">
                                            <input
                                                type="checkbox"
                                                checked={timing.includes(time)}
                                                onChange={() => handleTimingChange(time)}
                                            />
                                            {time}
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>

                        <input
                            type="number"
                            placeholder="Stock (number of doses available)"
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
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
