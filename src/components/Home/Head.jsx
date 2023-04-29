import { Box } from "@mui/material";
import React from "react";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
function Head() {
    const [catagory, Setcatagory] = React.useState('');

    const handleChange = (event) => {
        Setcatagory(event.target.value);
    };
  return (
    <Box m={5} display="flex" alignItems="center" justifyContent="space-between">
      <Box>
        <h1>Our Top Items</h1>
      </Box>
      <Box>

      <FormControl variant="filled" sx={{width:"200px"}}>
        <InputLabel id="demo-simple-select-filled-label" color="error">Catagory</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          color="error"
          value={catagory}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </Box>
    </Box>
  );
}

export default Head;
