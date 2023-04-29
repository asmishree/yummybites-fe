import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Box, TextField,Button  } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import "./pages.css"
import UniversalHero from "../components/UniversalHero";


function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    const { data } = await axios.post(
      "http://localhost:5000/api/v1/users/login",
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    if (data.success === true) {
      localStorage.setItem("authToken", data.authToken);
      navigate("/");
      console.log(data);
    } else {
      alert(data.error);
    }
  };

  return (
    <Box>
      <UniversalHero title="Login" />
      <Box className="auth">
      <Box mx={2} maxWidth={"400px"}>
        <form onSubmit={handleSubmit}>
          <TextField
          fullWidth
            id="filled-basic"
            variant="filled"
            color="warning"
            label="Email"
            type="email"
            placeholder="Email"
            value={email}
            
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
          fullWidth
            id="filled-basic"
            variant="filled"
            label="Password"
            type="password"
            placeholder="Password"
            color="warning"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
         <Box my={2}>
         <Button  type="submit" variant="contained" color="warning" endIcon={<SendIcon />}>Login</Button>
         </Box>
        </form>
        <Box textAlign={"center"}>
      <h2>OR</h2>
      <p>Don't have Account Create Account here</p>
      </Box>
      </Box>
      
      </Box>

    </Box>
  );
}

export default Login;
