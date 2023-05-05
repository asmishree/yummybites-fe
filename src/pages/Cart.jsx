import React from 'react'
import Delete from '@mui/icons-material/Delete';
import { useCart, useDispatchCart } from '../components/ContextReducer';
import UniversalHero from '../components/UniversalHero';
import Paper from '@mui/material/Paper';
import { Box, Table, TableBody, TableCell, TableHead, TableRow,TableContainer } from '@mui/material';
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
    // console.log(data,localStorage.getItem("userEmail"),new Date())
    let response = await fetch("http://localhost:5000/api/auth/orderData", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString()
      })
    });
    console.log("JSON RESPONSE:::::", response.status)
    if (response.status === 200) {
      dispatch({ type: "DROP" })
    }
  }

  let totalPrice = data.reduce((total, food) => total + food.price, 0)
  return (
    <Box>
      <UniversalHero title="Cart"/>
      {console.log(data)}
      <Box>
      <TableContainer component={Paper}>
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
                <TableCell align="center"><button type="button"><Delete onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </TableCell></TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
        <Box><h1>Total Price: {totalPrice}/-</h1></Box>
        <Box>
          <button onClick={handleCheckOut} > Check Out </button>
        </Box>
      </Box>
    </Box>
  )
}
