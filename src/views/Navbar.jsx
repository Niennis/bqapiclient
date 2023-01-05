import React from 'react';
import { Link, Outlet } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <>
      <header className="App-header">
        <Link to="/"><h1>Bakery Queen</h1></Link>
        <nav
          style={{
            paddingBottom: "1rem",
          }}
        >
          {user && <>
            <Link to="home">Home</Link>
            <Link to="kitchen">{" | Kitchen"}</Link>
            <Link to="admin">{user && " | Admin"}</Link>
          </>}
        </nav>

      </header>
      <Outlet />
    </>
  );
}

export default Navbar;
