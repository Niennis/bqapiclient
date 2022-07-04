import React, { useState } from "react";

import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import AlertDialog from "./Alert";

const Form = ({ typeForm, showModal, handleNewItem }) => {
  const roles = [
    {
      value: '',
      label: '',
    },
    {
      value: 'admin',
      label: 'Admin',
    },
    {
      value: 'otro',
      label: 'Otro',
    }]

  const typeProduct = [
    {
      value: '',
      label: '',
    },
    {
      value: 'breakfast',
      label: 'Pastel',
    },
    {
      value: 'lunch',
      label: 'Bebidas',
    }]

  const [option, setOption] = useState('');
  const [user, setUser] = useState({
    email: '',
    password: '',
    roles:''
  })
  const [product, setProduct] = useState({
    name: '',
    price: 0,
    image: '',
    type: ''
  })

  const handleChangeRol = (event) => {
    setOption(event.target.value);
      setUser({
        email: user.email,
        password: user.password,
        roles:{
          admin: event.target.value === 'admin' ? true : false
        }
      })
  };

  const handleChangeUser = ({target: {name, value}}) => {
    setUser(user => ({
      ...user,
      [name]: value
    }))
  }

  const handleChangeProduct = ({target: {name, value}}) => {
    const newProduct = {
      ...product,
      [name]: value
    }
    setProduct(product => ({
      name: newProduct.name,
      price: parseInt(newProduct.price),
      image: newProduct.image,
      type: newProduct.type
    }))
  }

  const handleChangeType = (event) => {
    setOption(event.target.value);
      setProduct(product => ({
        ...product,
        type: event.target.value === 'breakfast' ? 'breakfast' : 'lunch'
      }))
  };

  return (
    <div className="formContainer">
      <Typography variant="h5">Nuevo {typeForm}</Typography>
      <form>
        {typeForm === 'Usuarios' ?
          <>
            <TextField
              required
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="Email"
              variant="outlined"
              name="email"
              onChange={handleChangeUser}
            />
            <br />
            <TextField
              required
              style={{ width: "200px", margin: "5px" }}
              type="password"
              label="Contraseña"
              variant="outlined"
              name="password"
              onChange={handleChangeUser}

            />
            <br />
            <TextField
              required
              id="filled-select-currency-native"
              select
              label="Seleccione un rol"
              value={option}
              onChange={handleChangeRol}
              name="roles"
              SelectProps={{
                native: true,
              }}
              variant="outlined"
              sx={{ width: '200px' }}
            >
              {roles.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <br />
          </> :
          <>
            <TextField
              required
              name="name"
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="Nombre"
              variant="filled"
              onChange={handleChangeProduct}
            />
            <br />
            <TextField
              required
              name="price"
              style={{ width: "200px", margin: "5px" }}
              type="number"
              label="Precio"
              variant="outlined"
              onChange={handleChangeProduct}
            />
            <br />
            <TextField
              required
              name="image"
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="URL imagen"
              variant="outlined"
              onChange={handleChangeProduct}
            />
            <br />

            <TextField
              required
              id="filled-select-currency-native"
              select
              label="Seleccione tipo"
              value={option}
              onChange={handleChangeType}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
              sx={{ width: '200px' }}
            >
              {typeProduct.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <br />

          </>
        }
        <div className="alerts">

          <AlertDialog
            action={'Cancelar'}
            handleGet={showModal}
            handleUpdate={showModal}
          />
          <AlertDialog
            action={'Guardar'}
            handleGet={() => { }}
            handleUpdate={() => { showModal(); handleNewItem(typeForm === 'Usuarios' ? user: product) }}
          />
        </div>

      </form>
    </div>
  )
}

export default Form;
