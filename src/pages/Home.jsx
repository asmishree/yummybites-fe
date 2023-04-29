import React from "react";
import Hero from "../components/Home/Hero";
import { Box } from "@mui/material";
import Head from "../components/Home/Head";
import FoodItem from "../components/Home/FoodItem";
import Footer from "../components/Footer";

function Home() {
  return (
    <Box>
      <Hero />
      <Head />
      <Box className="fooditem-grid" mx={5}>
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
      </Box>
      <Box display="block">
        <Footer />
      </Box>
    </Box>
  );
}

export default Home;
