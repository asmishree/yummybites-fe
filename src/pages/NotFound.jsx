import { Box } from "@mui/material";
import React from "react";
import UniversalHero from "../components/UniversalHero";

function NotFound() {
  return (
    <Box>
      <UniversalHero title="Not Found" />
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent="center"
        height={"70vh"}
      >
        <Box>
          <h1>404 - Page Not Found</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
        </Box>
      </Box>
    </Box>
  );
}

export default NotFound;
