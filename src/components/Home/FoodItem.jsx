import React from "react";
import foodIMG from "../../assets/foodimg.jpg";
import { Box } from "@mui/material";

function FoodItem(props) {
  return (
    <Box className="food-item" border="2px solid" padding="10px">
      <Box display="flex" justifyContent="center">
        <img src={props.img} alt="food"/>
      </Box>
      <h3>{props.name}</h3>
      <Box className="row">
        <Box>
        <select name="cars" id="item">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
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
