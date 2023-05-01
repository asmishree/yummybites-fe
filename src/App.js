import React from 'react'
import "./App.css"
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'



function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/new" element={<Register />} />
      </Routes>

    </Router>
    </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App