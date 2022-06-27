import React, { useState, useEffect } from 'react'

export const Login = ({ getToken, navigateToHome }) => {

  const [dbData, setDBData] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  // const [token, setToken] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    let user = {
      "email": "admin@gmail.com",
      "password": "123456"
    };
    fetch('http://localhost:8080/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json",
      }
    })
      .then(resp => resp.json())
      .then(resp => {
        // setToken(resp.accessToken)
        // callData(resp.accessToken)
        console.log('resp.user', resp.user);
        // localStorage.setItem('token', resp.accessToken)
        // localStorage.setItem('rol', resp.user)
        // const leUser = localStorage.getItem('token')
        // console.log(leUser)
        getToken(resp.accessToken)
        navigateToHome()
      })
      .catch(err => console.log(err))
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type='text'
          id='email'
          autoComplete='off'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />

        <label htmlFor="password">Pass:</label>
        <input
          type='text'
          id='password'
          autoComplete='off'
          onChange={(e) => setPass(e.target.value)}
          value={password}
          required
        />

        <button>Sign in</button>
      </form>
    </section>
  )
}




  /*   const callData = (leToken) => {
      return fetch('http://localhost:8080/products', {
        method: 'GET',
        headers: {
          "content-type": "application/json",
          authorization: 'Bearer ' + leToken,
        }
      })
        .then(response => response.json())
        .then(resp => console.log('Productos', resp))
    } */



  /* 
  {
    "email": "waiter@gmail.com",
    "password": "123456"
    admin@gmail.com
    123456
  }
  */