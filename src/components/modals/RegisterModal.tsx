import React, { useState } from "react";
import { Button, Form, FormControl, Modal } from "react-bootstrap";

interface RegisterModalProps {
  show: boolean;
  handleClose: () => void;
  handleLogin: () => void; // Tambahkan properti handleLogin\
  onHide: boolean;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ show, handleClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <Modal show={show} onHide={handleClose} className="d-flex justify-content-center align-items-center" style={{ backgroundColor: " rgba(0, 0, 0, 0)", transition: ".3s" }}>
        <div className="px-5 pt-2 pb-3">
          <Form style={{ width: 400 }}>
            {/* email */}
            <h2 className="text-center fw-bold " style={{ color: "#5E5A00" }}>
              <div style={{ fontSize: "80px" }}>
                <i className="fa-solid fa-user-lock"></i>
              </div>
              REGISTER
            </h2>

            <Form.Group className="mb-3" controlId="fullname">
              <Form.Label className="form-label fw-bold" style={{ color: "#5E5A00" }}>
                Fullname
              </Form.Label>
              <FormControl className="shadow p-2 bg-body-tertiary rounded" type="text" name="fullname" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="alamat">
              <Form.Label className="form-label fw-bold" style={{ color: "#5E5A00" }}>
                Alamat
              </Form.Label>
              <FormControl className="shadow p-2 bg-body-tertiary rounded" type="text" name="alamat" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="jenis-kelamin">
              <Form.Label className="form-label fw-bold" style={{ color: "#5E5A00" }}>
                Jenis Kelamin
              </Form.Label>
              <FormControl className="shadow p-2 bg-body-tertiary rounded" type="text" name="jenis-kelamin" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="form-label fw-bold" style={{ color: "#5E5A00" }}>
                Email
              </Form.Label>
              <FormControl className="shadow p-2 bg-body-tertiary rounded" type="email" name="email" />
            </Form.Group>

            {/* password */}
            <Form.Group className="mb-3 " controlId="formBasicPassword">
              <Form.Label className="form-label fw-bold" style={{ color: "#5E5A00" }}>
                Password
              </Form.Label>
              <div style={{ display: "flex", position: "relative" }}>
                <FormControl className="shadow p-2 bg-body-tertiary rounded" type={showPassword ? "text" : "password"} name="password" />
                <div onClick={() => setShowPassword(!showPassword)} style={{ cursor: "pointer", position: "absolute", right: 20, top: 10 }}>
                  {showPassword ? <i className="fa-regular fa-eye-slash"></i> : <i className="fa-regular fa-eye"></i>}
                </div>
              </div>
            </Form.Group>

            <Button type="submit" className="btn w-100 text-white my-3 fw-bold" style={{ backgroundColor: "#5E5A00" }}>
              SUBMIT
            </Button>
            {/* <div className="text-center fst-italic">
              <span>Belum memiliki akun?</span> <button className="text-decoration-none">Login</button>
            </div> */}
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default RegisterModal;
