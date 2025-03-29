import React, { useState } from 'react';
import './Signup.css';

import {Link} from 'react-router-dom'

const Signup = () => {
    const [userType, setUserType] = useState(null);

    return (
        <div className='signup_container'>
            <div className='signups'>
                <p className='head'><Link to = "/">DoseWise</Link></p>
                <p>Signup to Continue</p>

                <form className="signup_form">
                    <input type="text" placeholder="Username" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <input type="password" placeholder="Confirm Password" required />

                    <div className="user_type_buttons">
                        <button 
                            className={userType === 'Regular' ? 'selected' : ''} 
                            onClick={() => setUserType('Regular')}
                        >
                        Patient
                        </button>
                    
                        <button 
                            className={userType === 'Doctor' ? 'selected' : ''} 
                            onClick={() => setUserType('Doctor')}
                        >
                        Doctor
                        </button>
                    </div>

                    <button type="submit" disabled={!userType}>Signup</button>
                    <p>Already have an Account? <Link to = "/login">Login</Link></p>

                    <div className="divider">
                    <div className="line"></div>
                    <span className="text">OR</span>
                    <div className="line"></div>
                    </div>
                </form>

                <div className='alt_signup'>
                <button className="google_signup">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" alt="Google Logo" />
                    Signup with Google
                </button>
                <button className="google_signup">
                    <img src="https://yt3.googleusercontent.com/RhsrKM2HugvjGkbHXmo93C-q3qZLJk9hzfeJHmproNh4qb6UA5cC--l0mTZ2QuM-yXF1wYijgw=s900-c-k-c0x00ffffff-no-rj" alt="Google Logo" />
                    Signup with Facebook
                </button>
                <button className="google_signup">
                    <img src="https://img.freepik.com/premium-vector/new-twitter-logo-x-2023-twitter-x-logo-official-vector-download_691560-10797.jpg?semt=ais_hybrid" alt="Google Logo" />
                    Signup with Twitter
                </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;
