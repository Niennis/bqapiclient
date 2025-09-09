import React, { useState, useEffect } from 'react';
import EnhancedTable from '../components/Table';
import Backdrop from '../components/Backdrop';

import { getItems, getItemById, updateItem, deleteItem, newItem } from '../controller/api';
import { headCellsUsers, headCellsProducts } from '../utils/headCells';

import './admin.css';

const Admin = ({ authToken }) => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentItem, setCurrentItem] = useState('');
  const [open, setOpen] = useState(false);

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
  }, [authToken])


  const getCurrentItem = (route, id) => {
    getItemById(route, id, authToken)
      .then(resp => setCurrentItem(resp))
  }

  const handleNewItem = (obj) => {
    setOpen(true);
    const route = !obj.email ? 'products' : 'users';
    newItem(route, obj, authToken)
      .then(() => getItems(route, authToken))
      .then(resp => {
        route === 'users' ? setUsers(resp.users) : setProducts(resp.products)
      })
      .finally(() => setOpen(false));
  }

  const handleEdit = (obj) => {
    setOpen(true);
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
      .finally(() => setOpen(false));
  }

  const handleDelete = (route, id) => {
    setOpen(true);
    deleteItem(route, id, authToken)
      .then(() => getItems(route, authToken))
      .then(resp => {
        route === 'users' ? setUsers(resp.users) : setProducts(resp.products)
      })
      .finally(() => setOpen(false));
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
      <Backdrop open={open} />

    </main>
  )
}

export default Admin;