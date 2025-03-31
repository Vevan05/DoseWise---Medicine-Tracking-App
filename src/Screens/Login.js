import React, { useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(u => u.email === email && u.password === password);

        if (!user) {
            setError("Invalid email or password!");
            return;
        }

        localStorage.setItem("currentUser", JSON.stringify(user));
        navigate('/user');
    };

    return (
        <div className="login_container">
            <div className="login">
                <p className='head'><Link to="/">DoseWise</Link></p>
                <p>Login using Social Media</p>

                <div className='icons'>
                    <div><FaFacebook size={30} /></div>
                    <div><BiLogoGmail size={30} /></div>
                    <div><FaXTwitter size={30} /></div>
                </div>

                <div className="divider">
                    <div className="line"></div>
                    <span className="text">OR</span>
                    <div className="line"></div>
                </div>

                <form className="login_form" onSubmit={handleLogin}>
                    {error && <p className="error-message">{error}</p>}
                    <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Login</button>
                </form>

                <div className='footer'>
                    <p>Forgot Password</p>
                    <p>New here? <Link to="/signup">Signup</Link></p>
                </div>
            </div>
            <div className='signup'></div>
        </div>
    );
};

export default Login;
