import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "../Api";
import UniversalHero from "../components/UniversalHero";
import { Box } from "@mui/material";

export default function MyOrder() {
  const [orderData, setOrderData] = useState({});

  const fetchMyOrder = async () => {
    console.log(localStorage.getItem("userEmail"));

    try {
      const response = await axios.post(
        `${API}/mydata`,
        {
          email: localStorage.getItem("userEmail"),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      await setOrderData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <Box>
      <UniversalHero title="My Orders" />
      <Box p={5}>
        <Box>
          {orderData !== {}
            ? Array(orderData).map((data) => {
                return data.orderData ? (
                  data.orderData.order_data
                    .slice(0)
                    .reverse()
                    .map((item) => {
                      return item.map((arrayData) => {
                        return (
                          <Box m={2}>
                            {arrayData.Order_date ? (
                              <Box>
                                {(data = arrayData.Order_date)}
                                <hr />
                              </Box>
                            ) : (
                              <Box>
                                <Box>
                                  <Box>
                                    <h2>
                                      {arrayData.name}
                                    </h2>
                                    <Box>
                                      <span>
                                        {arrayData.qty}
                                      </span>
                                      <span>
                                        {arrayData.size}
                                      </span>
                                      <h4>
                                        ₹{arrayData.price}/-
                                      </h4>
                                    </Box>
                                  </Box>
                                </Box>
                              </Box>
                            )}
                          </Box>
                        );
                      });
                    })
                ) : (
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    height={"70vh"}
                  >
                    <h1>No Orders Found</h1>
                  </Box>
                );
              })
            : ""}
        </Box>
      </Box>
    </Box>
  );
}
