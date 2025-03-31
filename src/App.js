import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from './Screens/Home';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import User from './Screens/User';
import Scanner from './Screens/Scanner';
import Status from './Screens/Status';
import Orders from './Screens/Order';
import MedicineHistory from './Screens/History';

function App() {
  return (
    <div>
      <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/user" element={<User/>} />
          <Route path="/scanner" element={<Scanner/>}/>
          <Route path="/status" element={<Status/>}/>
          <Route path="/order" element={<Orders/>}></Route>
          <Route path="/history" element={<MedicineHistory/>}></Route>
        </Routes>
      </div>

    </Router>
    </div>
  );
}

export default App;