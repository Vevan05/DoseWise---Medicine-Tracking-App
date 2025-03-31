import React, { useState } from 'react';
import './Order.css';
import { Link } from 'react-router-dom';

const getRandomArrivalDate = () => {
    const today = new Date();
    const randomDays = Math.floor(Math.random() * 5) + 1;
    today.setDate(today.getDate() + randomDays);
    return today.toDateString();
};

const Orders = () => {
    const [orderedMedicines, setOrderedMedicines] = useState([
        { id: 1, name: 'Paracetamol', quantity: 2, arrival: getRandomArrivalDate() },
        { id: 2, name: 'Ibuprofen', quantity: 1, arrival: getRandomArrivalDate() }
    ]);

    const medicineList = [
        { id: 3, name: 'Amoxicillin' },
        { id: 4, name: 'Cetirizine' },
        { id: 5, name: 'Metformin' },
        { id: 6, name: 'Aspirin' },
        { id: 7, name: 'Omeprazole' },
        { id: 8, name: 'Losartan' }
    ];

    const orderMedicine = (medicine) => {
        setOrderedMedicines([...orderedMedicines, { ...medicine, quantity: 1, arrival: getRandomArrivalDate() }]);
    };

    return (
        <div className="orders-container">
            <div className="header">
                <nav className="nav-links">
                    <span className="head">DoseWise</span>
                    <Link to="/user" className="nav-link">Medicine Schedule</Link>
                    <Link to="/scanner" className="nav-link">Prescription Scanner</Link>
                    <Link to="/status" className="nav-link">Prescription Status</Link>
                    <Link to="/history" className="nav-link">Medicine History</Link>
                    <Link to="/" className="nav-link">Logout</Link>
                </nav>
            </div>

            <p className='head'>Your Orders</p>
            <div className="orders-table-container">
                {orderedMedicines.length > 0 ? (
                    <table className="orders-table">
                        <thead>
                            <tr>
                                <th>Medicine</th>
                                <th>Quantity</th>
                                <th>Arrival Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderedMedicines.map(order => (
                                <tr key={order.id}>
                                    <td>{order.name}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.arrival}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="no-orders">You have no orders yet.</p>
                )}
            </div>

            <h2>Order More Medicines</h2>
            <div className="orders-table-container">
                <table className="orders-table">
                    <thead>
                        <tr>
                            <th>Medicine</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {medicineList.map(medicine => (
                            <tr key={medicine.id}>
                                <td>{medicine.name}</td>
                                <td>
                                    <button className="order-btn" onClick={() => orderMedicine(medicine)}>
                                        Order
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;
