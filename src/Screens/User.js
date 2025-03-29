import React from 'react';

import {Link} from 'react-router-dom'

import './User.css';


const User = () => {
    return(
        <div className='user_container'>
            <div className = "header">
                <nav className = "nav-links">
                <span className = "head">DoseWise</span>
          
                <Link to = "/scanner" className = "nav-link">Prescription Scanner</Link>
                <a href = "/a" className = "nav-link">Prescription Status</a>
                <a href = "/b" className = "nav-link">Order History</a>
                <a href = "/c" className = "nav-link">Medicine History</a>
                </nav>  
            </div>

            <p className='head'>
                Medicine Schedule
            </p>

            <div className='scanner'></div>
            <div className='schedule'></div>
            <div className='med_history'></div>
            <div className='orders'></div>
            <div className='order_history'></div>

        </div>
    )
}

export default User;