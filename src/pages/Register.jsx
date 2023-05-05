import React, { useState } from "react";
import axios from "axios";
import { Box, TextField,Button  } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import UniversalHero from "../components/UniversalHero";
import { useNavigate, Link } from "react-router-dom";
import API from "../Api";

function Register() {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    const { data } = await axios.post(
      `${API}/users/register`,
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
    if (data.success === true) {
      localStorage.setItem("userEmail", email);
      localStorage.setItem("authToken", data.authToken);
      navigate("/");
      alert(data.message);
    } else {
      alert(data.message);
    }
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
        variant="filled"
        label="Password"
        color="warning"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
        fullWidth
        id="filled-basic"
        label="Location"
        variant="filled"
        multiline
          rows={3}
        color="warning"
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Box my={2}>
        <Button type="submit" variant="contained" color="warning" endIcon={<SendIcon />}>Register</Button>
        </Box>
      </form>
      <Box textAlign={"center"}>
      <h2>OR</h2>
      <p>Allready have Account <Link to="/login" className="link"> Login here </Link> </p>
      </Box>
      </Box>
      </Box>
    </Box>
  );
}

export default Register;
