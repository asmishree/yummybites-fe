import React from 'react'
import axios from 'axios';
import Delete from '@mui/icons-material/Delete';
import { useCart, useDispatchCart } from '../components/ContextReducer';
import UniversalHero from '../components/UniversalHero';
import Paper from '@mui/material/Paper';
import { Box, Table, TableBody, TableCell, TableHead, TableRow,TableContainer, Button, IconButton } from '@mui/material';
import API from '../Api';
import { toast } from "react-hot-toast";



export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <Box>
        <UniversalHero title="Cart"/>
        <Box display="flex" justifyContent="center" alignItems="center" height="50vh"><h1>The Cart is Empty!</h1></Box>
      </Box>
    )
  }
  // const handleRemove = (index)=>{
  //   console.log(index)
  //   dispatch({type:"REMOVE",index:index})
  // }

  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    try {
      const response = await axios.post(`${API}/orderdata`, {
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString()
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 200) {
        dispatch({ type: "DROP" })
        toast.success("Order Placed");
      }
    } catch (error) {
      console.log(error);
    }
  }

  let totalPrice = data.reduce((total, food) => total + food.price, 0)
  return (
    <Box>
      <UniversalHero title="Cart"/>
      <Box className='cart-table'>
      <TableContainer component={Paper} >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell >Name</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Option</TableCell>
              <TableCell align="center">Amount</TableCell>
              <TableCell ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((food, index) => (
              <TableRow>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{food.name}</TableCell>
                <TableCell align="center">{food.qty}</TableCell>
                <TableCell align="center">{food.size}</TableCell>
                <TableCell align="center">{food.price}</TableCell>
                <TableCell align="center"><IconButton type="button"><Delete onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></IconButton> </TableCell></TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
        <Box className="cart-footer">
        <Box><h1>Total Price: {totalPrice}/-</h1></Box>
        <Box>
          <Button onClick={handleCheckOut} variant="contained" color="warning" > Check Out </Button>
        </Box>
        </Box>
      </Box>
      {/* Mobile Table View */}
      <Box className='mobile-table'>
      <TableContainer component={Paper} >
        <Table>
          <TableHead>
            <TableRow>
            
              <TableCell >Name</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Option</TableCell>
              <TableCell align="center">Amount</TableCell>
              <TableCell ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((food, index) => (
              <TableRow>
   
                <TableCell>{food.name}</TableCell>
                <TableCell align="center">{food.qty}</TableCell>
                <TableCell align="center">{food.size}</TableCell>
                <TableCell align="center">{food.price}</TableCell>
                <TableCell align="left"><IconButton type="button"><Delete onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></IconButton> </TableCell></TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
        <Box className="cart-footer">
        <Box><h2>Total Price: {totalPrice}/-</h2></Box>
        <Box>
          <Button onClick={handleCheckOut} variant="contained" color="warning" > Check Out </Button>
        </Box>
        </Box>
      </Box>
    </Box>
  )
}
