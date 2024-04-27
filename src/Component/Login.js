import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Css/Login.css'; // Import CSS file for styling

const Login = ({ setIsAuthenticated }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    async function submit(e) {
        e.preventDefault();
    
        try {
            const response = await axios.post('http://localhost:5000/login', {
                email,
                password
            });
    
            if (response.data.message === "Login successful.") {
                alert("Login successful.");
                setIsAuthenticated(true);
                navigate("/home"); // Redirect to home page
            } else {
                setError(response.data.message || "User not found. Please sign up.");
            }
        } catch (error) {
            console.error("Error:", error);
            setError("Something went wrong. Please try again.");
        }
    }

    return (
        <div className='login-container'>
            <h1>Login</h1>
            <form onSubmit={submit}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit" className="login-button">Login</button>
            </form>
            {error && <p>{error}</p>}
            <div className="divider"></div>
            <p>OR</p>
            <div className="divider"></div>
            <Link to="/signup" className="signup-link">Signup Page</Link>
        </div>
    );
}

export default Login;
