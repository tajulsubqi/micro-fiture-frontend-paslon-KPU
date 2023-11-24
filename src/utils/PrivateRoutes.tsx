import { Navigate, Outlet } from "react-router-dom";
import { UserCtx } from "../libs/MyContext";
import { useContext } from "react";

//LOGIN ?
export const PrivateRoute = () => {
  const [state, _] = useContext(UserCtx)!;
  if (state.isLogin) return <Outlet />;

  return <Navigate to="/login" />;
};

// LOGIN SEBAGAI USER
export const PrivateRouteUser = () => {
  const [state, _] = useContext(UserCtx)!;
  if (state.user.role === "customer") return <Outlet />;
  return <Navigate to="/" />;
};

//LOGIN SEBAGAI ADMIN
export const PrivateRouteAdmin = () => {
  const [state, _] = useContext(UserCtx)!;
  if (state.user.role === "admin") return <Outlet />;

  return <Navigate to="/" />;
};

// export default function PrivateRoutes() {
//   const [state, _] = useContext(UserCtx);
//   console.log(state);

//   const authentication = {
//     isLogin: true,
//     role: "admin",
//   };
//   return authentication.isLogin ? <Outlet /> : <Navigate to="/login" />;
// }
