/* import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");
render(<App />, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 */
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
       <BrowserRouter>
    <App />
       </BrowserRouter>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} > */}
          
          {/* <Route path="login" element={<Login />} /> */}
          {/* <Route path="home" element={<Home />} />
          <Route path="kitchen" element={<Kitchen />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
  </React.StrictMode>

);