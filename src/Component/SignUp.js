import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Css/Login.css'; // Import CSS file for styling

const SignUp = ({ setIsAuthenticated }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/signup', {
                email,
                password
            });

            if (response.data === "exist") {
                alert("User already exists. Please log in.");
                navigate("/"); // Redirect to login page
            } else {
                alert("Signup successful. Please log in.");
                navigate("/"); // Redirect to login page
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong. Please try again.");
        }
    }

    return (
        <div className='login-container'>
            <h1>Signup</h1>
            <form onSubmit={submit}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit" className="login-button">Sign Up</button>
            </form>
            <br />
            <p>OR</p>
            <br />
            <Link to="/" className="signup-link">Login Page</Link>
        </div>
    );
}

export default SignUp;
