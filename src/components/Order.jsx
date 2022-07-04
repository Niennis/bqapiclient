import React from 'react'
import CustomizedButtons from './SendButton';

import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import RemoveCircleTwoToneIcon from '@mui/icons-material/RemoveCircleTwoTone';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';

export const Order = ({ orderProducts, addItem, deleteItem, deleteAllItem, totalOrder, sendOrder }) => {

  return (
    <div className="orderContainer">
      {orderProducts.map((element, index) => {
        return (
          <div className="orderItem" key={element.product.name + index}>
            <p onClick={() => { addItem(element.product) }}><AddCircleTwoToneIcon /></p>
            <p>{element.qty}</p>
            <p onClick={() => { deleteItem(element.product) }}><RemoveCircleTwoToneIcon /></p>
            <p className='orderNameProduct'>{element.product.name}</p>
            <p className='orderPriceProduct'>$ {element.qty * element.product.price}</p>
            <p onClick={() => { deleteAllItem(element.product) }}><DeleteForeverTwoToneIcon /></p>
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
