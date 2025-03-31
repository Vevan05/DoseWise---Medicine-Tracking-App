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
import Requests from './Screens/Requests';
import Sold from './Screens/Sold';
import View from './Screens/View'

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
          <Route path="/order" element={<Orders/>}/>
          <Route path="/history" element={<MedicineHistory/>}/>
          <Route path="/requests" element={<Requests/>}/>
          <Route path="/sold" element={<Sold/>}/>
          <Route path="/view" element={<View/>}/>
        </Routes>
      </div>

    </Router>
    </div>
  );
}

export default App;