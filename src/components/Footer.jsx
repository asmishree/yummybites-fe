import { Box,IconButton } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <Box m={5}>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Box className="logo">
        <h1>Yummy Bites</h1>
        </Box>
        <Box className="SocialMedia">
          <span>
            <IconButton>
            <FacebookIcon fontSize="large"/>
            </IconButton>
          </span>
          <span>
          <IconButton>
            <WhatsAppIcon fontSize="large"/>
            </IconButton>
          </span>
          <span>
          <IconButton>
            <TwitterIcon fontSize="large"/>
            </IconButton>
          </span>
          <span>
          <IconButton>
            <InstagramIcon fontSize="large"/>
            </IconButton>
          </span>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <p>Copyright © 2023 Yummy Bites</p>
        <p>Design by Sagar Nirwal</p>
      </Box>
    </Box>
  );
}

export default Footer;
