import React, { useState, useEffect } from 'react';

import { Product } from '../components/Product';
import { Order } from '../components/Order';
import { getItems, sendOrder } from '../controller/api';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../utils/theme'
import './home.css';

export const Home = ({ authToken }) => {
  const [dbData, setDBData] = useState([]);
  const [orderProducts, setOrderProducts] = useState([])
  const [listOfProducts, setListOfProducst] = useState([])
  const [client, setClient] = useState('');

  useEffect(() => {
    getItems('products', authToken)
      .then(items => {
          setDBData(items.products)
      })
  }, [authToken])

  const handleAddProduct = (item) => {
    let updateOrder = listOfProducts.map(el => {
      if (el.product === item) {
        el.qty++
      }
      return el
    })
    setListOfProducst(updateOrder)
  }

  const addItem = (item) => {
    if (orderProducts.includes(item)) {
      handleAddProduct(item)
    } else {
      let newProd = {
        "qty": 1,
        "product": item
      }
      setOrderProducts([...orderProducts, item])
      setListOfProducst([...listOfProducts, newProd])
    }
  }

  const deleteItem = (item) => {
    let updateOrder = listOfProducts.map(el => {
      if (el.product === item && el.qty > 0) {
        el.qty--
      }
      return el
    })
    const itemsOverZero = updateOrder.filter(el => el.qty > 0)
    const updateOrderProd = itemsOverZero.map(el => el.product)
    setOrderProducts(updateOrderProd)
    setListOfProducst(itemsOverZero)
  }

  const deleteAllItem = (item) => {
    let updateOrder = listOfProducts.map(el => {
      if (el.product === item) {
        el.qty = 0
      }
      return el
    })
    const itemsOverZero = updateOrder.filter(el => el.qty > 0)
    const updateOrderProd = itemsOverZero.map(el => el.product)
    setOrderProducts(updateOrderProd)
    setListOfProducst(itemsOverZero)
  }

  
  const handleTotal = () => {
    let sum = 0;
    listOfProducts.forEach(el => sum += el.qty * el.product.price)
    return sum
  }
  
  const createOrder = () => {
    const user = localStorage.getItem('user')
    const newOrder = {}

    newOrder.userId = JSON.parse(user).id;
    newOrder.client = client;
    newOrder.products = listOfProducts;

    return sendOrder('orders', newOrder, authToken)
      .then(resp => console.log(resp))
  }

  return (
    <section className='home'>
      <ThemeProvider theme={theme}>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch', backgroundColor: 'white' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="filled-required"
            label="Nombre cliente"
            type="text"
            variant="filled"
            onChange={(e) => setClient(e.target.value)}
            name="client"
          />
        </Box>
        <div className="allProducts" >
          {dbData.map(element => {
            return (
              <div key={element.id}>
                <Product img={element.image} name={element.name} price={element.price} addItem={() => { addItem(element) }} />
              </div>
            )
          })}
        </div>

        {orderProducts.length === 0
          ? <h3 className='orderContainer'>Agregar productos</h3>
          : <>
            <Order
              orderProducts={listOfProducts}
              addItem={handleAddProduct}
              deleteItem={deleteItem}
              deleteAllItem={deleteAllItem}
              totalOrder={'$' + handleTotal()}
              sendOrder={() => createOrder()} />
          </>
        }
      </ThemeProvider>
    </section>
  )
}
