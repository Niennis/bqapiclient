// import React, { useState, useEffect } from 'react';
// import { Product } from '../components/Product';

// export const Home = ({ authToken }) => {
//   const [dbData, setDBData] = useState([]);
//   // const [token, setToken] = useState('');
//   const callData = (authToken) => {
//     return fetch('http://localhost:8080/products', {
//       method: 'GET',
//       headers: {
//         "content-type": "application/json",
//         authorization: 'Bearer ' + authToken,
//       }
//     })
//       .then(response => response.json())
//   }

//   useEffect(() => {
//     let mounted = true;
//     callData(authToken)
//       .then(items => {
//         if (mounted) {
//           setDBData(items)
//         }
//       })
//     return () => mounted = false;
//   }, [])

//   return (
//     <div className="allProducts" >
//       {dbData.map(element => {
//         return (
//           <div key={element.id}>
//             <Product img={element.img} name={element.name} price={element.price} />
//           </div>
//         )
//       })}
//     </div>
//   )
// }
