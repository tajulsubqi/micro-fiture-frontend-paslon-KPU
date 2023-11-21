import React, { useState } from "react";
import { Button, Form, FormControl, Modal } from "react-bootstrap";
import RegisterModal from "./RegisterModal";

interface LoginModalProps {
  show: boolean;
  handleClose: () => void;
  handleLogin: () => void; // Tambahkan properti handleLogin
}

const LoginModal: React.FC<LoginModalProps> = ({ show, handleClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRegisterModal, setShowRegister] = useState(false);

  const handleOpenRegister = (e: any) => {
    e.preventDefault();
    setShowRegister(true);
    handleClose();
  };

  const handleCloseRegisterModal = () => {
    setShowRegister(false);
  };

  return (
    <div className="pt-5">
      <Modal show={show} onHide={handleClose} className="d-flex justify-content-center align-items-center p-5 " style={{ backgroundColor: " rgba(0, 0, 0, .5)", transition: ".3s" }}>
        <div className="px-5 pt-4 pb-2">
          <Form style={{ width: 400 }}>
            {/* email */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <h2 className="text-center fw-bold " style={{ color: "#5E5A00" }}>
                <div style={{ fontSize: "80px" }}>
                  <i className="fa-solid fa-user"></i>
                </div>
                LOGIN
              </h2>
              <Form.Label className="form-label fw-bold" style={{ color: "#5E5A00" }}>
                Email
              </Form.Label>
              <FormControl className="shadow p-2 bg-body-tertiary rounded" type="email" placeholder="Enter username" name="email" />
            </Form.Group>

            {/* password */}
            <Form.Group className="mb-3 " controlId="formBasicPassword">
              <Form.Label className="form-label fw-bold" style={{ color: "#5E5A00" }}>
                Password
              </Form.Label>
              <div style={{ display: "flex", position: "relative" }}>
                <FormControl className="shadow p-2 bg-body-tertiary rounded" type={showPassword ? "text" : "password"} placeholder="Password" name="password" />
                <div onClick={() => setShowPassword(!showPassword)} style={{ cursor: "pointer", position: "absolute", right: 20, top: 10 }}>
                  {showPassword ? <i className="fa-regular fa-eye-slash"></i> : <i className="fa-regular fa-eye"></i>}
                </div>
              </div>
            </Form.Group>
            <Button type="submit" className="btn w-100 text-white my-4" style={{ backgroundColor: "#5E5A00" }}>
              SUBMIT
            </Button>
            <div className="text-center">
              <p className="fst-italic text-center">Belum memiliki akun?</p>{" "}
              <button onClick={handleOpenRegister} className="btn  text-primary fst-italic" style={{ marginTop: "-40px", border: "none" }}>
                Register
              </button>
            </div>
          </Form>
        </div>
      </Modal>
      {showRegisterModal && <RegisterModal handleClose={handleCloseRegisterModal} show={true} />}
    </div>
  );
};

export default LoginModal;
