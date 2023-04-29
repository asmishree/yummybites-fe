import React from "react";
import foodIMG from "../../assets/foodimg.jpg";
import { Box } from "@mui/material";

function FoodItem() {
  return (
    <Box className="food-item" border="2px solid" padding="10px">
      <Box display="flex" justifyContent="center">
        <img src={foodIMG} alt="food"/>
      </Box>
      <h3>Chilli Panner</h3>
      <Box className="row">
        <Box>
        <select name="cars" id="item">
          <option value="volvo">1</option>
          <option value="saab">2</option>
          <option value="mercedes">3</option>
          <option value="audi">4</option>
        </select>
        </Box>
        <Box>
        <select name="cars" id="size">
          <option value="half">half</option>
          <option value="full">full</option>
        </select>
        </Box>
        <h2>170/-</h2>
      </Box>
    </Box>
  );
}

export default FoodItem;
