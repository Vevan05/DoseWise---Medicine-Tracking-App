import React from 'react';

import { TbReport } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import { TbClock } from "react-icons/tb";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineHealthAndSafety } from "react-icons/md";

import {Link} from 'react-router-dom'

import './Home.css';

function Home() {
  return (
    <div className="container">
      <div className = "header">
        <nav className = "nav-links">
          <span className = "head">DoseWise</span>
          
          <Link to = "/signup" className = "nav-link">Medicine Schedule</Link>
          <Link to = "/signup" className = "nav-link">Order Tracking</Link>
          <Link to = "/signup" className = "nav-link">Medicines Sold</Link>
        </nav>

        <div className = "buttons">
          <div className = "button"><div><Link to="/login">Login</Link></div></div>
          <div className = "button"><div><Link to="/signup">Get Started</Link></div></div>
        </div>
      </div>
      <header>
        Simplify Your Medication <br/> Management
      </header>

      <p>
      We will ensure that you never miss a dose and always have your medicines stocked, 
      <br/>promoting better health management with minimal effort</p>

      <button className = "start"><Link to = "/signup">Get Started</Link></button>

      <ul className = "info">
        <li className = "info-card">
          <TbReport size={50}/>
          <p>Prescription Scanning</p>
        </li>
        <li className = "info-card">
          <TbTruckDelivery size={50}/>
          <p>Automated Medicine Orders</p>
        </li>
        <li className = "info-card">
          <TbClock size={50}/>
        <p>Smart Medicine Reminders</p>
        </li>
        <li className = "info-card">
          <FaUserDoctor size={50}/>
        <p>Monitoring by Doctors</p>
        </li>
        <li className = "info-card">
          <MdOutlineHealthAndSafety size={50}/>
        <p>Ensuring Safety of Data</p>
        </li>
      </ul>
    </div>
  );
}

export default Home;