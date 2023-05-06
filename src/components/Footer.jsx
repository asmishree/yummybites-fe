import { Box,IconButton } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

function Footer() {
  const date = new Date();
  return (
    <Box m={5}>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Box className="logo footerlogo">
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
      <Box className="footer-font">
        <p>Copyright © {date.getFullYear()} Yummy Bites</p>
        <p>Design by <Link to="https://github.com/sn247776">Sagar Nirwal</Link></p>
      </Box>
    </Box>
  );
}

export default Footer;
