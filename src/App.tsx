import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
        </Routes>
      </Router>
    </>
  );
}
