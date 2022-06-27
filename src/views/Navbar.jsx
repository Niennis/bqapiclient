import React, { useState, useEffect } from 'react';
import { Link, Outlet } from "react-router-dom";
import { Login } from "./Login"; 

const Navbar = () => {

  return (
    <>
      <header className="App-header">
        <Link to="/"><h1>Burger Queen</h1></Link>
        <nav
          style={{
            paddingBottom: "1rem",
          }}
        >
          {/* <Link to="login">Login</Link> |{" "} */}
          <Link to="home">Home</Link> |{" "}
          <Link to="kitchen">Kitchen</Link>
        </nav>

      </header>
      <Outlet />
    </>
  );
}

export default Navbar;
