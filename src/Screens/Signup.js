import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Signup() {

      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');

      const handleSubmit = async (event) => {
            event.preventDefault();

            if (password !== confirmPassword) {
                  alert('Passwords do not match!');
                  return;
            }

            const formData = { name, email, password };

            try {
                  // Correct URL with the correct port
                  const url = "http://127.0.0.1:3000/user/saveuser";
                  const response = await axios.post(url, formData);

                  console.log(response.data); // Log response data from server
                  alert(response.data.message); // Show server response message in alert

            } catch (e) {
                  if (e.response && e.response.status == 409) {
                        return alert("user already exists");
                  }
                  alert('An error occurred: ' + e.message);
            }
      };

      return (
            <div style={{ maxWidth: '400px', margin: '50px auto' }}>
                  <h2>Simple React Form</h2>
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {/* Form Fields */}
                        <div>
                              <label>Name: </label>
                              <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    style={{ padding: '8px', fontSize: '14px', flex: '1' }}
                              />
                        </div>
                        <div>
                              <label>Email: </label>
                              <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    style={{ padding: '8px', fontSize: '14px', flex: '1' }}
                              />
                        </div>
                        <div>
                              <label>Password: </label>
                              <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    style={{ padding: '8px', fontSize: '14px', flex: '1' }}
                              />
                        </div>
                        <div>
                              <label>Confirm Password: </label>
                              <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                    style={{ padding: '8px', fontSize: '14px', flex: '1' }}
                              />
                        </div>
                        <button type="submit">Submit</button>
                  </form>
                  <p>
                        already have an account?<Link to="/login">Login</Link>
                  </p>
            </div>
           
      )
}

export default Signup;