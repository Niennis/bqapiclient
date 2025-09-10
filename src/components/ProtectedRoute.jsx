import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, children }) => {
  if (user === undefined) {
    // todavía no sabemos si hay usuario → loader
    return <p>Cargando...</p>;
  }

  if (!user) {
    // ya sabemos que NO hay usuario → login
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
