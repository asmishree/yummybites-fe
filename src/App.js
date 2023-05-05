import React from 'react'
import "./App.css"
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import { CartProvider } from './components/ContextReducer';
import Cart from "./pages/Cart"



function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CartProvider>
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/new" element={<Register />} />
      </Routes>

    </Router>
    </CartProvider>
    </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App