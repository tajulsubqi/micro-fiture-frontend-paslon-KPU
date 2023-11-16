import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes() {
  const authentication = {
    // token: "fsfsf",
    role: true
  };
  return authentication.role ? <Outlet /> : <Navigate to="/login" />;
}
