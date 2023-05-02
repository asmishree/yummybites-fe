import React, { useState } from "react";
import Hero from "../components/Home/Hero";
import { Box } from "@mui/material";
import Head from "../components/Home/Head";
import FoodItem from "../components/Home/FoodItem";
import Footer from "../components/Footer";
import axios from 'axios';

function Home() {
  const [foodItem, setFoodItem] = useState([]);

  axios.get('http://localhost:5000/api/v1/items/list')
  .then(response => {
    setFoodItem(response.data);
  })
  .catch(error => {
    console.log(error);
  });
  return (
    <Box>
      <Hero />
      <Head />
      <Box className="fooditem-grid" mx={5}>
        {
          foodItem !==[]
          ? foodItem.map((data)=>{
            return (<div><FoodItem name={data.name} img={data.img} /></div>)
          }): <div>Loading....</div>
        }
        
      </Box>
      <Box display="block">
        <Footer />
      </Box>
    </Box>
  );
}

export default Home;
