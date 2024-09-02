import { Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";


function Login({setloginverified}) {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const navigate = useNavigate();

      const ValidateCredentials = async (event) => {
            event.preventDefault();
            const formdata = { email, password };

            const url = "http://127.0.0.1:3000/user/validate";
            try {
                  const result = await axios.post(url, formdata,{withCredentials:true});
                  if (result.status === 200) {
                        alert('User found Successfully');
                        navigate('/dashboard',{state: {email}});
                        localStorage.setItem('token',result.data.token);
                        setloginverified(true);
                  }
            } catch (e) {
                  if (e.response && e.status === 401) {
                        return alert('User not found, Invalid credentials');
                  }
                  alert(e + 'This is the error casuing problems');
            }
      }

      return (
            <div>
                  <h1>Login</h1>
                  <div>
                        <form onSubmit={ValidateCredentials}>
                              <div>
                                    <label> Email : </label>
                                    <input
                                          type="email"
                                          value={email}
                                          onChange={(e) => setEmail(e.target.value)}
                                          required
                                    />
                              </div>

                              <div style={{ marginTop: '10px' }}>
                                    <label> Password : </label>
                                    <input
                                          type="password"
                                          value={password}
                                          onChange={(e => setPassword(e.target.value))}
                                          required
                                    />
                              </div>
                              <button  type="submit">Submit</button>
                        </form>
                  </div>
                  <p>
                        Don't have an account?<Link to="/signup"> Sign Up</Link>

                  </p>
            </div>
      )
}

export default Login;