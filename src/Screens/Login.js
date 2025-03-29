import React from 'react';
import './Login.css';

import { FaFacebook } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div className = "login_container">
            <div className = "login">
                
                <p className = 'head'><Link to = "/">DoseWise</Link></p>
                <p>Login using Social Media</p>
                
                <div className='icons'>
                    <div><FaFacebook size = {30}/></div>
                    <div><BiLogoGmail size = {30}/></div>
                    <div><FaXTwitter size = {30}/></div>
                </div>

                <div className="divider">
                    <div className="line"></div>
                    <span className="text">OR</span>
                    <div className="line"></div>
                </div>

                <form className = "login_form">
                    <input type = "email" placeholder="Email" required />
                    <input type = "password" placeholder="Password" required />
                    <button type = "submit">Login</button>
                </form>

                <div className='footer'>
                    <p>Forgot Password</p>
                    <p>New here? <Link to = "/signup">Signup</Link></p>
                </div>
            
            </div>
            
            <div className="signup"></div>

        </div>
    );
}

export default Login;
