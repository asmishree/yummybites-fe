import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { Box,  useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from '@mui/material/Badge';
import "./TopBar.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from "./ContextReducer";
import { toast } from "react-hot-toast";

// Mob NavBar Work

import Menu from '@mui/material/Menu';



const Topbar = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Mob NavBar Work



  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [navbar, setNavbar] = useState(false);
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
      fontSize:"20px"
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
            {authToken ? (
              <Box display="flex">
                <NavLink style={navLinkStyles} to="/cart">
                <Badge badgeContent={data.length} color="warning" overlap="circular">
                  <ShoppingCartIcon sx={{ fontSize: 30 }}/>
                  </Badge>
                </NavLink>
                <NavLink style={navLinkStyles} to="/order">
                  <span>MY ORDERS</span>
                </NavLink>
                <NavLink style={navLinkStyles} to="/login">
                  <span onClick={handleLogout}>LOGOUT</span>
                </NavLink>
              </Box>
            ) : (
              <Box>
                <NavLink style={navLinkStyles} to="/login">
                  <span>LOGIN</span>
                </NavLink>
              </Box>
            )}
          </Box>
          <Box display="flex">
            <Box
              onClick={colorMode.toggleColorMode}
              color={navbar ? "" : "white"}
              mx={1}
            >
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlinedIcon sx={{ cursor: "pointer",fontSize: 30  }} />
              ) : (
                <LightModeOutlinedIcon sx={{ cursor: "pointer",fontSize: 30  }} />
              )}
              
            </Box>

            <div>
      <Box
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color={navbar ? "" : "white"}
        className="mobMenu"
      >
        <MenuIcon sx={{ cursor: "pointer",fontSize: 30  }} />
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Box width={"100vw"} py={"20px"} >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
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
      </Menu>
    </div>

          </Box>
        </Box>
      </Box>

    </Box>
  );
};

export default Topbar;
