import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export default function FormLogin() {
  //
  const [showPassword, setShowPassword] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    console.log("data email", data.get("email"));
    console.log("data password", data.get("password"));

    const email = data.get("email");
    const password = data.get("password");

    if (email === "admin@gmail.com" && password === "admin") {
      setLoginSuccess(true);
      setLoginError(false); // Reset loginError jika login berhasil
      return navigate("/admin");
    } else {
      setLoginSuccess(false);
      setLoginError(true);
    }
  };

  return (
    <>
      {loginSuccess && (
        <div className="alert alert-success d-flex align-items-center" role="alert">
          <div>
            <i className="fa-solid fa-check text-bg-success"></i>Login berhasil!
          </div>
        </div>
      )}

      {loginError && (
        <div className="alert alert-danger d-flex align-items-center" role="alert">
          <div>
            <i className ="fa-solid fa-xmark text-danger"></i> Login gagal. Periksa kembali username dan password Anda.
          </div>
        </div>
      )}

      <div className="container mt-5 bg-light w-50 rounded-3">
        <h1 className="text-center pt-5 fw-bold " style={{ color: "#5E5A00" }}>
          <div style={{ fontSize: "80px" }}>
            <i className="fa-solid fa-user"></i>
          </div>
          LOGIN
        </h1>
        <form onSubmit={handleSubmit} className="w-75 mx-auto py-5">
          <div className="mb-3">
            <label htmlFor="userName" className="form-label fw-bold" style={{ color: "#5E5A00" }}>
              Username
            </label>
            <input type="email" className="form-control" id="userName" name="email" />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-bold" style={{ color: "#5E5A00" }}>
              Password
            </label>
            <div style={{ display: "flex", position: "relative" }}>
              <input type={showPassword ? "text" : "password"} className="form-control" id="password" name="password" />
              <div onClick={() => setShowPassword(!showPassword)} style={{ cursor: "pointer", position: "absolute", right: 20, top: 7 }}>
                {showPassword ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
              </div>
            </div>
          </div>

          <button type="submit" className="btn w-100 text-white" style={{ backgroundColor: "#5E5A00" }}>
            SUBMIT
          </button>
          <p className="text-center mt-4 fst-italic">
            Belum memiliki akun ?{" "}
            <a onClick={() => navigate("/register")} href="#">
              Register
            </a>
          </p>
        </form>
      </div>
    </>
  );
}
