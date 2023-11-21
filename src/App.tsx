import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Vote from "./pages/Vote";
import NotFound from "./components/NotFound";
import Admin from "./pages/dashboardPage/Admin";
import ListPaslon from "./pages/Paslon";
import PrivateRoutes from "./utils/PrivateRoutes";
import AddPaslon from "./pages/AddPaslon";
import AddPartai from "./pages/AddPartai";
import Partai from "./pages/Partai";
import VoteModal from "./components/modals/voteModal";

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
          <Route path="/admin/partai" element={<Partai />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="/vote" element={<Vote />}></Route>
          <Route path="/addpaslon" element={<AddPaslon />}></Route>
          <Route path="/addpartai" element={<AddPartai />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/vote/modal" element={<VoteModal />}></Route>
        </Routes>
      </Router>
    </>
  );
}
