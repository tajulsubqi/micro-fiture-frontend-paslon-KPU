import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail_Page";
import Vote from "./pages/Vote";
import NotFound from "./components/NotFound";
import Admin from "./pages/dashboardPage/Admin";
import ListPaslon from "./pages/Paslon";
import AddPaslon from "./pages/AddPaslon";
import AddPartai from "./pages/AddPartai";
import Partai from "./pages/Partai";
// import VoteModal from "./components/modals/voteModal";
import LoginPage from "./pages/Login_Page";
import RegisterPage from "./pages/Register_Page";
import { PrivateRoute, PrivateRouteAdmin, PrivateRouteUser } from "./utils/PrivateRoutes";
import React, { useContext, useEffect } from "react";
import { UserCtx } from "./libs/MyContext";
import { setAuthToken, API } from "./libs/api";
// import { useNavigate } from "react-router-dom";

export default function App() {
  // const navigate = useNavigate();
  const [isLoading, setLoading] = React.useState<boolean>(true);
  const [state, dispatch] = useContext(UserCtx)!;

  console.log(state);

  // cek kalau sudah ada token
  // fungsi untuk triger ngecek tokennya

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      cekUser();
    } else {
      setLoading(false);
    }
  }, []);

  async function cekUser() {
    try {
      // Periksa apakah token tersedia
      const token = localStorage.getItem("token");

      if (!token) {
        // Jika tidak ada token, mungkin pengguna belum login
        dispatch({
          type: "AUTH_ERROR",
          payload: {},
        });
        setLoading(false);
        return;
      }

      // Jika token tersedia, sertakan dalam header permintaan
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await API.get("http://localhost:5000/api/v1/user", { headers });

      console.log(response.data);
      const payload = response.data;
      payload.token = token;

      console.log(payload);

      dispatch({
        type: "USER_SUCCESS",
        payload,
      });

      setLoading(false);
    } catch (err) {
      dispatch({
        type: "AUTH_ERROR",
        payload: {},
      });
      setLoading(false);
    }
  }

  // ...

  return (
    <>
      {isLoading ? null : (
        <Router>
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route element={<PrivateRoute />}>
                <Route path="/admin" element={<Admin />} />
              </Route>

              <Route element={<PrivateRouteUser />}></Route>

              <Route element={<PrivateRouteAdmin />}></Route>
            </Route>

            {/* <Route path="/vote/modal" element={<VoteModal />}></Route> */}

            <Route path="/admin/paslon" element={<ListPaslon />} />
            <Route path="/admin/partai" element={<Partai />} />
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/vote" element={<Vote />} />
            <Route path="/addpaslon" element={<AddPaslon />} />
            <Route path="/addpartai" element={<AddPartai />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      )}
    </>
  );
}
