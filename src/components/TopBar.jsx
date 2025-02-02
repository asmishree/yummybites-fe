import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from '@mui/material/Badge';
import "./TopBar.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from "./ContextReducer";
import { toast } from "react-hot-toast";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [navbar, setNavbar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const authToken = (localStorage.getItem("authToken"));
  const navigate = useNavigate();
  let data = useCart()
  
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail")
    toast.success("Logout successfully");
    navigate("/login");
  };

  const logoColor = () => {
    return {
      color: navbar ? colors.link[500] : "white",
      textDecoration: "none",
    };
  };

  const navLinkStyles = ({ isActive }) => {
    return {
      color: navbar ? colors.link[500] : "white",
      borderBottom: isActive ? "2px solid" : "none",
      textDecoration: "none",
    };
  };

  const mobLinkStyles = ({ isActive }) => {
    return {
      color: colors.link[500],
      borderBottom: isActive ? "2px solid" : "none",
      textDecoration: "none",
      fontSize:"28px",
      fontWeight:"500",
      margin:"10px 0"
    };
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        p={2}
        px={3}
        alignItems="center"
        className="navbar"
        bgcolor={navbar ? colors.primary[400] : ""}
        color={navbar ? "" : "white"}
      >
        <NavLink to="/" className="logo" style={logoColor}>
          <h1>Yummy Bites</h1>
        </NavLink>

        {/* Nav Items */}
        <Box display="flex" alignItems="center">
          <Box display="flex">
            {/* {authToken ? (
              <Box display="flex">
                <NavLink style={navLinkStyles} to="/cart">
                <Badge badgeContent={data.length} color="warning" overlap="circular">
                  <ShoppingCartIcon/>
                  </Badge>
                </NavLink>
                <NavLink style={navLinkStyles} to="/order">
                  <span>MY ORDERS</span>
                </NavLink>
                <Box>
                  <span onClick={handleLogout}>LOGOUT</span>
                </Box>
              </Box>
            ) : (
              <Box>
                <NavLink style={navLinkStyles} to="/login">
                  <span>LOGIN</span>
                </NavLink>
              </Box>
            )} */}
            <NavLink style={navLinkStyles} to="/cart">
                <Badge badgeContent={data.length} color="warning" overlap="circular">
                  <ShoppingCartIcon/>
                  </Badge>
                </NavLink>
          </Box>
          <Box display="flex">
            <Box
              onClick={colorMode.toggleColorMode}
              color={navbar ? "" : "white"}
              mx={1}
            >
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlinedIcon sx={{ cursor: "pointer" }} />
              ) : (
                <LightModeOutlinedIcon sx={{ cursor: "pointer" }} />
              )}
            </Box>
            <Box className="mobMenu">
              <MenuIcon onClick={handleMenuClick} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        className={menuOpen ? "mob-navbar open" : "mob-navbar"} onClick={handleMenuClick}
        
      >
        <Box bgcolor={colors.primary[400]}  >
        <Box textAlign="right">
          <IconButton onClick={handleMenuClick}>
            <CloseIcon fontSize="large"/>
          </IconButton>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          p={"50px 0px"}
        >

          <NavLink style={mobLinkStyles} to="/">
            <span>HOME</span>
          </NavLink>
          {authToken ? (
              <Box className="mob-links">
          <NavLink style={mobLinkStyles} to="/cart">
            <span>CART</span>
          </NavLink>
          <NavLink style={mobLinkStyles} to="/order">
            <span>MY ORDERS</span>
          </NavLink>
          <NavLink style={mobLinkStyles} to="/login">
            <span onClick={handleLogout}>LOGOUT</span>
          </NavLink>

          </Box>
            ) :  (
              <Box className="mob-links">
                  <NavLink style={mobLinkStyles} to="/login">
                  <span>LOGIN</span>
                </NavLink>
                <NavLink style={mobLinkStyles} to="/login/new">
                  <span>SIGN UP</span>
                </NavLink>
              </Box>
            )}
    
        </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;