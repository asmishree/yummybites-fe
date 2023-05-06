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
import MyOrder from './pages/MyOrder';
import { Toaster } from "react-hot-toast";
import NotFound from './pages/NotFound';



function App() {
  const [theme, colorMode] = useMode();
  const authToken = (localStorage.getItem("authToken"));
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CartProvider>
    <Router>
    {authToken ? (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<MyOrder />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/new" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes> ) :
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/new" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        </Routes>}
      <Toaster />
    </Router>
    </CartProvider>
    </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App