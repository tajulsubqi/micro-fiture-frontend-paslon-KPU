import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Vote from "./pages/Vote";
import NotFound from "./components/NotFound";
import Admin from "./pages/dashboardPage/Admin";
import ListPaslon from "./pages/Paslon";
import PrivateRoutes from "./utils/PrivateRoutes";
import Paslon from "./pages/dashboardPage/Paslon";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/admin" element={<Admin />}></Route>
          </Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/admin/paslon" element={<ListPaslon />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          {/* <Route path="/login" element={<Login />}></Route> */}
          {/* <Route path="/register" element={<Register />}></Route> */}
          <Route path="/vote" element={<Vote />}></Route>
          <Route path="/admin/addpaslon" element={<Paslon />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </>
  );
}
