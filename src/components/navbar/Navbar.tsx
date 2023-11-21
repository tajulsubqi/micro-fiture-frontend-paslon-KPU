import { useState, useEffect } from "react";
import LoginModal from "../modals/LoginModal";

const NavbarLog = () => {
  const [isLogin] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleCLickLogin = () => {
    setShowLoginModal(true);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  const handleLogin = () => {
    handleCloseModal();
  };
  return (
    <div>
      <LoginModal show={showLoginModal} handleClose={handleCloseModal} handleLogin={handleLogin} />

      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: "black" }}>
        <div className="container">
          <a href="/">
            {" "}
            <img src="./public/logo.png" alt="logo" width="40px" className="py-1" />
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active fw-bold" aria-current="page" href="/admin">
                  PEMILU PRESIDEN DUMBWAYS.ID
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex flex-row text-white text-center">
            <a href="/addpartai" className="text-decoration-none text-light p-2">
              Partai
            </a>
            <div className="p-2">|</div>
            <a href="/addpaslon" className="text-decoration-none text-light p-2">
              Paslon
            </a>
            <div className="p-2">|</div>
            <a href="/vote" className="text-decoration-none text-light p-2">
              Voting
            </a>
          </div>
          <button className="btn btn-light btn-sm ms-4 fw-bold border rounded text-decoration-none bg-white" onClick={handleCLickLogin}>
            {isLogin ? "Logout" : "Login"}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavbarLog;
