import React, { useState, useEffect } from 'react';
import { Orders } from '../components/Orders.jsx';

const Kitchen = ({ authToken }) => {
  const [orders, setOrders] = useState([]);

  const callOrders = () => {
    return fetch('https://bq-niennis.herokuapp.com/orders', {
      method: 'GET',
      headers: {
        "content-type": "application/json",
        authorization: 'Bearer ' + authToken,
      }
    })
      .then(response => response.json())
  }

  useEffect(() => {
    callOrders()
      .then(items => {
          const pendingOrders = items.orders.filter(item => item.status === 'pending')
          setOrders(pendingOrders)
      })
  }, [])

  const date = new Date()
  const days = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  const month = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth();
  const dateProcessed = date.getFullYear() + '-' + month + '-' + days + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()

  const updatedOrder = {
    "status": "delivered",
    "dateProcessed": dateProcessed
  }

  const handleUpdate = async (order) => {
    const response = await fetch('https://bq-niennis.herokuapp.com/orders/' + order.id, {
      method: 'PATCH',
      body: JSON.stringify(updatedOrder),
      headers: {
        "content-type": "application/json",
        authorization: 'Bearer ' + authToken,
      }
    });
    const resp = await response.json();
    const pendingOrders = orders.map(item => {
      if(item.id === order.id){
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
            <Orders key={item.id + item.userId} client={item.client} product={item} qtyProducts={orders.length} handleUpdate={() => handleUpdate(item)} />
          )
        })
      }
    </div>
  )
}

export default Kitchen;