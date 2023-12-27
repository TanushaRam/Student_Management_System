import axios from 'axios'; // Import axios
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const changeHandler = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:9090/Login/${credentials.username}/${credentials.password}`);
      
      // Check if the response indicates a successful login (adjust based on your backend response)
      if (response.status === 200 && response.data && response.data.valid === true) {
        console.log('Login successful');
        navigate('/view-students'); // Redirect to the dashboard or desired page
      } else {
        console.log('Invalid credentials'); // Log a message for invalid credentials
        // Handle invalid login attempt, display a message, or take appropriate action
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error or show a message to the user
    }
  };

  return (
    <div>
      <div className='container w-50 mt-5'>
        <div className='card shadow p-3'>
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <h2>LOGIN_PAGE</h2>
              <label htmlFor="exampleInputusername1" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputusername1"
                aria-describedby="usernameHelp"
                name="username"
                value={credentials.username}
                onChange={changeHandler}
              />
              <div id="usernameHelp" className="form-text">We'll never share your username with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name='password'
                value={credentials.password}
                onChange={changeHandler}
              />
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
