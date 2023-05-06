import { Box } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import React from "react";

function Loading() {
  return (
    <Box className="loading">

      <Box>
        <Box className="logo" my={5}> <h1>Yummy Bites</h1></Box>
        <h3>
        Loading...
        </h3>
        <Box my={2}>
          <LinearProgress color="warning"/>
        </Box>
      </Box>
    </Box>
  );
}

export default Loading;
