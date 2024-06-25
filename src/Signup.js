import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Signup.css';
import { Gallary } from './Gallary';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate(); // Get the navigate function from useNavigate
  const [isSignup, setIsSignup] = useState(true); // State to toggle between signup and login
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [DOB, setDOB] = useState('');
  const [password, setPassword] = useState('');
  const handlePost=()=>{
    axios.post("http://localhost:5000/signup",{userName,email,DOB,password})//5000-input--username,email,password,dob-- code destruct and store 
    .then(()=>{ 
        alert("data saved");
        
     })
    .catch((e)=>{ console.log(`error:${e}`)})


    }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle signup or login logic here (e.g., send data to backend)
    if (isSignup) {
      console.log('Signing up...');
      console.log('User name:', userName);
      console.log('Email:', email);
      console.log('DOB:', DOB);
      console.log('Password:', password);
    } else {
      console.log('Logging in...');
      // Handle login logic here
    }
    handlePost()
    // Redirect to home page after successful signup or login
    navigate('/'); // Use navigate function to go to the home page
  };

  return (
    <div className="main" >
      <div className="form-container">
        <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>
        <form onSubmit={handleFormSubmit}>
          {isSignup && (
            <input
              type="text"
              name="txt"
              placeholder="User name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {isSignup && (
            <input
              type="date"
              name="DOB"
              placeholder="DOB"
              value={DOB}
              onChange={(e) => setDOB(e.target.value)}
              required
            />
          )}
          <input
            type="password"
            name="pswd"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{isSignup ? 'Sign Up' : 'Login'}</button>
        </form>
        <div className="switch-link">
          <a href="#!" onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? 'Already have an account? Login here' : 'Don\'t have an account? Sign Up here'}
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Signup;
