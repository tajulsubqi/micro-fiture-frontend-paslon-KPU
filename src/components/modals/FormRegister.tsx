import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormRegister() {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="container my-5 bg-light w-50 rounded-3">
      <h1 className="text-center pt-5 fw-bold flex flex-column" style={{ color: "#5E5A00" }}>
        <div style={{ fontSize: "80px" }}>
          <i className="fa-solid fa-user-lock"></i>
        </div>
        REGISTER
      </h1>
      <form className="w-75 mx-auto py-5">
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label fw-bold" style={{ color: "#5E5A00" }}>
            Fullname
          </label>
          <input type="text" className="form-control" id="fullName" name="fullname" />
        </div>

        <div className="mb-3">
          <label htmlFor="alamat" className="form-label fw-bold" style={{ color: "#5E5A00" }}>
            Alamat
          </label>
          <input type="text" className="form-control" id="alamat" name="alamat" />
        </div>

        <div className="mb-3">
          <label htmlFor="alamat" className="form-label fw-bold" style={{ color: "#5E5A00" }}>
            Jenis Kelamin
          </label>
          <input type="text" className="form-control" id="alamat" name="jenis kelamin" />
        </div>

        <div className="mb-3">
          <label htmlFor="username" className="form-label fw-bold" style={{ color: "#5E5A00" }}>
            Username
          </label>
          <input type="email" className="form-control" id="username" name="email" />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label fw-bold" style={{ color: "#5E5A00" }}>
            Password
          </label>
          <div style={{ position: "relative", display: "flex" }}>
            <input type={showPassword ? "text" : "password"} className="form-control" id="password" name="password" />
            <div onClick={() => setShowPassword(!showPassword)} style={{ position: "absolute", right: "20px", top: "7px", cursor: "pointer" }}>
              {showPassword ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
            </div>
          </div>
        </div>

        <button onClick={() => navigate("/login")} type="submit" className="btn w-100 text-white mt-3" style={{ backgroundColor: "#5E5A00" }}>
          SUBMIT
        </button>
        <p className="text-center mt-4 fst-italic">
          Belum memiliki akun ? <a href="#">Register</a>
        </p>
      </form>
    </div>
  );
}
