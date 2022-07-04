import React, { useState, useEffect } from 'react';
import { Orders } from '../components/Orders.jsx';
import { getItemById, getItems, updateItem } from '../controller/api.js';

import './kitchen.css';

const Kitchen = ({ authToken }) => {
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState('');

  useEffect(() => {
    getItems('orders', authToken)
      .then(items => {
        const pendingOrders = items.orders.filter(item => item.status === 'pending')
        setOrders(pendingOrders)
      })
  }, [])

  const getOrder = (order) => {
    getItemById('orders', order.id, authToken)
      .then(resp => setOrder(resp))
  }

  const handleUpdate = async (order) => {

    const date = new Date()
    const days = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    const month = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth();
    const dateProcessed = date.getFullYear() + '-' + month + '-' + days + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()

    const updatedOrder = {
      id: order.id,
      userId: order.userId,
      client: order.client,
      products: order.products,
      status: "delivered",
      dateEntry: order.dateEntry,
      dateProcessed: dateProcessed
    }

    // const response = await fetch('http://localhost:80/orders/' + order.id, {
    //   method: 'PUT',
    //   body: JSON.stringify(updatedOrder),
    //   headers: {
    //     "content-type": "application/json",
    //     authorization: 'Bearer ' + authToken,
    //   }
    // });

    const resp = updateItem('orders', order.id, updatedOrder, authToken)
    const pendingOrders = orders.map(item => {
      if (item.id === order.id) {
        item = resp
      }
      return item
    });
    const updatedPendingOrders = pendingOrders.filter(item => item.status === 'pending')
    setOrders(updatedPendingOrders);
  }

  return (
    <div className='allOrders'>
      {
        orders.map((item) => {
          return (
            <Orders
              key={item.id + item.userId}
              order={item}
              qtyProducts={orders.length}
              getOrder={() => getOrder(item)}
              handleUpdate={() => handleUpdate(item)} />
          )
        })
      }
    </div>
  )
}

export default Kitchen;