import React, { useState } from "react";
import axios from "axios";
import { Box, TextField,Button  } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import UniversalHero from "../components/UniversalHero";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, location, password);
    const {data} = await axios.post(
      "http://localhost:5000/api/v1/users/register",
      {
        name,
        email,
        location,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
      
    );
    console.log(data)
  };

  return (
    <Box>
      <UniversalHero title="Register" />
      <Box className="auth">
      <Box mx={2} maxWidth={"400px"}>
      <form onSubmit={handleSubmit}>
        <TextField
        fullWidth
        id="filled-basic"
        variant="filled"
        color="warning"
          type="text"
          label="Name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
        fullWidth
        id="filled-basic"
        variant="filled"
        label="Email"
        color="warning"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
        fullWidth
        id="filled-basic"
        label="Location"
        variant="filled"
        color="warning"
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <TextField
        fullWidth
        id="filled-basic"
        variant="filled"
        label="Password"
        color="warning"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Box my={2}>
        <Button type="submit" variant="contained" color="warning" endIcon={<SendIcon />}>Register</Button>
        </Box>
      </form>
      <Box textAlign={"center"}>
      <h2>OR</h2>
      <p>Allready have Account Login here</p>
      </Box>
      </Box>
      </Box>
    </Box>
  );
}

export default Register;
