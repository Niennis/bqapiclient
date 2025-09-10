import { Link, Outlet } from "react-router-dom";
import AlertDialog from "./Alert";

const Navbar = ({ user }) => {

  const logout = () => {
    // Al hacer logout:
    localStorage.removeItem('token');
    // Redirige al login o vista de inicio
    window.location.href = '/'; // o la ruta que uses
  }
  return (
    <>
      <header className="App-header">
        <Link to="/"><h1>Bakery Queen</h1></Link>

        <nav className="nav-container">
          <div className="links-container">
            {user && (
              <>
                <Link to="home" className="nav-link">Home</Link>
                <Link to="kitchen" className="nav-link">Kitchen</Link>
                <Link to="admin" className="nav-link">Admin</Link>
              </>
            )}
          </div>

          <AlertDialog action={'Logout'} handleUpdate={logout} />
          {/* <button className="logout-btn">Logout</button> */}
        </nav>
      </header>

      <Outlet />
    </>
  );
}

export default Navbar;
