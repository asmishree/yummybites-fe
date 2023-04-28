import React from "react";
import Topbar from "../TopBar";
import { Box } from "@mui/material";
import "./Home.css";
import Search from "./Search";

function Hero() {
  return (
    <Box>
      <Box className="home-bg-img">
        <Box className="home-bg-color">
          <Topbar />
          <Box className="home-intro">
            <Box>
              <h1>Authentic Italian Pizzeria</h1>
              <Search />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
}

export default Hero;
