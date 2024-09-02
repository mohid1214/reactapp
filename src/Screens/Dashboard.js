import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Dashboard() {

      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const location = useLocation();


      useEffect(() => {
            if (location.state?.email) {
                  setEmail(location.state.email);
            }
      }, [location.state])

      useEffect(()=>{
            
      })

      const getpassword = async () => {
            const token = localStorage.getItem('token');
            if(!token){
                  alert('token not found');
            }

            try {
                  const response = await axios.post("http://127.0.0.1:3000/user/getpassword",{email},{withCredentials:true},{
                        headers:{
                              Authorization: token
                        }
                  });
                  if (response.status === 200) {
                        setPassword(response.data.data);
                        alert(response.data.data)
                        alert('password found');
                  }
            } catch (e) {
                  alert(e.response.data.message);
                  alert(e);
            }
      }

      return (

            <div>
                  <h1>
                        Dashboard
                  </h1>
                  <h2>{email}</h2>
                  {password && (
                        <div>
                              <h2>{password}</h2>
                        </div>
                  )

                  }
                  <Button variant="outlined" size="small" onClick={getpassword}>Click to see password</Button>
            </div>
      )
}

export default Dashboard;