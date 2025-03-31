import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    const [user, setUser] = useState({ username: '', email: '', password: '', confirmPassword: '', userType: null });
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        if (!user.username || !user.email || !user.password || !user.confirmPassword || !user.userType) {
            return alert("All fields are required!");
        }
        if (user.password !== user.confirmPassword) {
            return alert("Passwords do not match!");
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];
        if (users.some(u => u.email === user.email)) {
            return alert("User already exists!");
        }

        users.push({ username: user.username, email: user.email, password: user.password, userType: user.userType });
        localStorage.setItem("users", JSON.stringify(users));

        navigate('/login');
    };

    return (
        <div className='signup_container'>
            <div className='signups'>
                <p className='head'><Link to="/">DoseWise</Link></p>
                <p>Signup to Continue</p>

                <form className="signup_form" onSubmit={handleSignup}>
                    <input type="text" placeholder="Username" required onChange={(e) => setUser({ ...user, username: e.target.value })} />
                    <input type="email" placeholder="Email" required onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    <input type="password" placeholder="Password" required onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    <input type="password" placeholder="Confirm Password" required onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} />

                    <div className="user_type_buttons">
                        <button type="button" className={user.userType === 'User' ? 'selected' : ''} onClick={() => setUser({ ...user, userType: 'User' })}>
                            User
                        </button>
                        <button type="button" className={user.userType === 'Doctor' ? 'selected' : ''} onClick={() => setUser({ ...user, userType: 'Doctor' })}>
                            Doctor
                        </button>
                    </div>

                    <button type="submit" disabled={!user.userType}>Signup</button>
                    <p>Already have an account? <Link to="/login">Login</Link></p>

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
                        <img src="https://yt3.googleusercontent.com/RhsrKM2HugvjGkbHXmo93C-q3qZLJk9hzfeJHmproNh4qb6UA5cC--l0mTZ2QuM-yXF1wYijgw=s900-c-k-c0x00ffffff-no-rj" alt="Facebook Logo" />
                        Signup with Facebook
                    </button>
                    <button className="google_signup">
                        <img src="https://img.freepik.com/premium-vector/new-twitter-logo-x-2023-twitter-x-logo-official-vector-download_691560-10797.jpg?semt=ais_hybrid" alt="Twitter Logo" />
                        Signup with Twitter
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;
