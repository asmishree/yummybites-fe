import React, { useEffect, useRef, useState } from "react";
import { useCart, useDispatchCart } from "./ContextReducer";
import { Box, Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";


export default function FoodItemCard(props) {



  let dispatch = useDispatchCart();
  let data = useCart();
  const priceRef = useRef()
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  // let foodItem = props.items;
  //1st fase
  let options = props.options;
  let priceOptions = Object.keys(options);

  // handle cart
  const handleAddToCart = async () => {
    let food =[]
    for (const item of data){
      if(item.id === props.foodItem._id){
        food = item;
        break;
      }
    }

    if (food !==[]){
      if(food.size === size){
        await dispatch({type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty:qty})
        return
      }
      else if (food.size !== size){
        await dispatch({
          type: "ADD",
          id: props.foodItem._id,
          name: props.foodItem.name,
          price: finalPrice,
          qty: qty,
          size: size,
        });
        return
      }
      return
    }

    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size,
    });
    console.log(data);
  };
  let finalPrice = qty * parseInt(options[size]);
  useEffect(()=>{
    setSize(priceRef.current.value)
  },[])
  return (
    <Box className="food-item" border="2px solid" padding="10px" >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        className="image-box"
      >
        <Box className="description" > {props.foodItem.description} </Box>
        <img src={props.foodItem.img} alt="food" />
      </Box>
      <h3>{props.foodItem.name}</h3>
      <Box className="row">
        <Box>
          <select onChange={(e) => setQty(e.target.value)}>
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
        </Box>
        <Box>
          <select ref={priceRef} onChange={(e) => setSize(e.target.value)}>
            {priceOptions.map((data) => {
              return <option key={data} value={data}>{data}</option>
            })}
          </select>
        </Box>
        <h2>₹{finalPrice}/-</h2>
      </Box>
      <Box className="cart">
        <hr />
        <Button
          type="submit"
          variant="contained"
          color="warning"
          endIcon={<AddShoppingCartIcon />}
          onClick={handleAddToCart}
        >
          Cart
        </Button>
      </Box>
    </Box>
  );
}
