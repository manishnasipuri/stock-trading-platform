import { isLoggedIn } from "../utils/auth";

function ProtectedRoute({ children }) {
  if (!isLoggedIn()) {
    const frontendUrl = process.env.REACT_APP_FRONTEND_URL || "http://localhost:3002";
    window.location.href = `${frontendUrl}/login`;
    return null;
  }
  return children;
}

export default ProtectedRoute;