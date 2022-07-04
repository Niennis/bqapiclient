import React, { useState, useEffect } from 'react';
import EnhancedTable from '../components/Table';
import AlertDialog from '../components/Alert';
import { getItems, getItemById, updateItem, deleteItem, newItem } from '../controller/api';

import { headCellsUsers, headCellsProducts } from '../utils/headCells';
import Form from '../components/Form';

import { theme } from '../utils/theme'

import './admin.css';

const Admin = ({ authToken }) => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentItem, setCurrentItem] = useState('');

  useEffect(() => {
    getItems('users', authToken)
      .then(resp => {
        setUsers(resp.users)
      })

    getItems('products', authToken)
      .then(resp => {
        setProducts(resp.products)
      })

    getItems('users', authToken)
  }, [])


  const getCurrentItem = (route, id) => {
    console.log('getCurrentItem', id)
    getItemById(route, id, authToken)
      .then(resp => setCurrentItem(resp))
  }

  const handleNewItem = (obj) => {
    const route = !obj.email ? 'products' : 'users';
    console.log('OBJ', obj)
    newItem(route, obj, authToken)
      .then(() => getItems(route, authToken))
      .then(resp => {
        route === 'users' ? setUsers(resp.users) : setProducts(resp.products)
      })
  }

  const handleEdit = (obj) => {

    const bodyUser = {
      'email': obj.email || currentItem.email,
      'password': obj.password || 'changeme',
      'roles': obj.roles || currentItem.roles
    }

    const bodyProduct = {
      name: obj.name || currentItem.name,
      price: obj.price || currentItem.price,
      url: obj.url || currentItem.url,
      type: obj.type || currentItem.type
    }

    const route = !obj.email ? 'products' : 'users';
    const body = !obj.email ? bodyProduct : bodyUser;

    updateItem(route, currentItem.id, body, authToken)
      .then(() => getItems(route, authToken))
      .then(resp => {
        route === 'users' ? setUsers(resp.users) : setProducts(resp.products)
      })
  }

  const handleDelete = (route, id) => {
    console.log('handleDelete', id)
    deleteItem(route, id, authToken)
      .then(() => getItems(route, authToken))
      .then(resp => {
        route === 'users' ? setUsers(resp.users) : setProducts(resp.products)
      })
  }

  const functions = {
    handleEdit,
    handleDelete,
    getCurrentItem,
    handleNewItem
  }

  return (
    <main>
      <EnhancedTable
        typeForm={'Usuarios'}
        rows={users}
        functions={functions}
        headCells={headCellsUsers}
        handleNewItem={handleNewItem}
      />

      <EnhancedTable
        typeForm={'Productos'}
        rows={products}
        functions={functions}
        headCells={headCellsProducts}
        handleNewItem={handleNewItem}
      />

    </main>
  )
}

export default Admin;