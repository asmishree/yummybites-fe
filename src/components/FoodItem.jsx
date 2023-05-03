import React from "react";
import { Box, Button } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
function FoodItem(props) {
  let options = props.options;
  let priceOptions = Object.keys(options);
  return (
    <Box className="food-item" border="2px solid" padding="10px">
      <Box display="flex" justifyContent="center" alignItems="center" className="image-box">
        <Box className="description"> {props.description} </Box>
        <img src={props.img} alt="food" />
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
          <select>
            {priceOptions.map((data) => {
              if (data === "_id") {
                return 0;
              }
              else{
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                );
              }

       
            })}
          </select>
        </Box>
        <h2>₹170/-</h2>
      </Box>
      <Box className="cart">
      <hr/>
      <Button  type="submit" variant="contained" color="warning" endIcon={<AddShoppingCartIcon />}>Cart</Button>
      </Box>
    </Box>
  );
}

export default FoodItem;
