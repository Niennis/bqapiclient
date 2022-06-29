import React from 'react'
import CustomizedButtons from './SendButton'

export const Order = ({ orderProducts, addItem, deleteItem, deleteAllItem, totalOrder, sendOrder }) => {

  return (
    <div>
      <h3>Orden n°...</h3>
      {orderProducts.map((element, index) => {
        return (
          <div className="orderItem" key={element.product.name + index}>
            <p onClick={() => { addItem(element.product) }}>+</p>
            <p>{element.qty}</p>
            <p onClick={() => { deleteItem(element.product) }}>-</p>
            <p>{element.product.name}</p>
            <p>{element.qty * element.product.price}</p>
            <p onClick={() => { deleteAllItem(element.product) }}>x </p>
          </div>
        )
      })}
      <div>
        <h3>{totalOrder}</h3>
        <CustomizedButtons sendOrder={sendOrder} variant="contained">Enviar</CustomizedButtons>
      </div>
    </div>
  )
}
