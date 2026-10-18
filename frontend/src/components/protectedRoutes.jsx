import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isLogedIn =
    localStorage.getItem("isLogedIn") === "true";

  return isLogedIn ? children : <Navigate to="/" replace />;
}

export default ProtectedRoute;