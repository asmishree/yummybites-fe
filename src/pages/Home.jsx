import React, { useEffect, useState } from "react";
import TopBar from "../components/TopBar";
import { Box } from "@mui/material";
import FoodItemCard from "../components/FoodItemCard";
import Footer from "../components/Footer";
import axios from "axios";
import API from "../Api";

function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [search, setSearch] = useState("");

  const loadFoodItems = async () => {
    axios
      .post(`${API}/items/list`)
      .then((response) => {
        const foodData = response.data[0];
        foodData.forEach(function (obj) {
          delete obj.options[0]._id;
        });
        setFoodItems(foodData);
        setFoodCat(response.data[1]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    loadFoodItems();
  }, []);
  return (
    <Box>
      <Box>
        <Box className="home-bg-img">
          <Box className="home-bg-color">
            <TopBar />
            <Box className="home-intro">
              <Box>
                <h1>Authentic Italian Pizzeria</h1>
                <Box className="search">
                  <input
                    placeholder="SEARCH HERE"
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {foodCat !== []
        ? foodCat.map((data) => {
            return (
              <Box className="grid-flow" m={5}>
                <Box key={data.id} className="grid-head">
                  {data.CategoryName}
                </Box>

                {foodItems !== [] ? (
                  foodItems
                    .filter(
                      (items) =>
                        items.CategoryName === data.CategoryName &&
                        items.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((filterItems) => {
                      return (
                        <Box key={filterItems.id}>
                          <FoodItemCard
                            foodItem={filterItems}
                            options={filterItems.options[0]}
                          />
                        </Box>
                      );
                    })
                ) : (
                  <Box> No Such Data </Box>
                )}
              </Box>
            );
          })
        : ""}

      <Box className="fooditem-grid" mx={5}></Box>
      <Box display="block">
        <Footer />
      </Box>
    </Box>
  );
}

export default Home;
