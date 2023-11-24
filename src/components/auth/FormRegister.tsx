import React, { FormEvent, ChangeEvent, useState } from "react";
import { API } from "../../libs/api";
import { useNavigate } from "react-router-dom";

type Register = {
  fullname: string;
  alamat: string;
  jeniskelamin: string;
  email: string;
  password: string;
};

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = React.useState<Register>({
    fullname: "",
    alamat: "",
    jeniskelamin: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  console.log(user);

  async function HandleSubmit(e: FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();

      const headers = {
        "Content-Type": "application/json",
      };

      const response = await API.post("/auth/register", user, { headers });

      console.log(response);
      navigate("/login");
    } catch (err) {
      throw err;
    }
  }

  return (
    <div className="container my-5 bg-light w-50 rounded-3">
      <h1 className="text-center pt-5 fw-bold flex flex-column" style={{ color: "#5E5A00" }}>
        <div style={{ fontSize: "80px" }}>
          <i className="fa-solid fa-user-lock"></i>
        </div>
        REGISTER
      </h1>
      <form onSubmit={HandleSubmit} className="w-75 mx-auto py-5">
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label fw-bold" style={{ color: "#5E5A00" }}>
            Fullname
          </label>
          <input onChange={handleChange} type="text" className="form-control" id="fullName" name="fullname" />
        </div>

        <div className="mb-3">
          <label htmlFor="alamat" className="form-label fw-bold" style={{ color: "#5E5A00" }}>
            Alamat
          </label>
          <input onChange={handleChange} type="text" className="form-control" id="alamat" name="alamat" />
        </div>

        <div className="mb-3">
          <label htmlFor="alamat" className="form-label fw-bold" style={{ color: "#5E5A00" }}>
            Jenis Kelamin
          </label>
          <input onChange={handleChange} type="text" className="form-control" id="jeniskelamin" name="jeniskelamin" />
        </div>

        <div className="mb-3">
          <label htmlFor="username" className="form-label fw-bold" style={{ color: "#5E5A00" }}>
            Username
          </label>
          <input onChange={handleChange} type="email" className="form-control" id="username" name="email" />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label fw-bold" style={{ color: "#5E5A00" }}>
            Password
          </label>
          <div style={{ position: "relative", display: "flex" }}>
            <input onChange={handleChange} type={showPassword ? "text" : "password"} className="form-control" id="password" name="password" />
            <div onClick={() => setShowPassword(!showPassword)} style={{ position: "absolute", right: "20px", top: "7px", cursor: "pointer" }}>
              {showPassword ? <i className="fa-regular fa-eye-slash"></i> : <i className="fa-regular fa-eye"></i>}
            </div>
          </div>
        </div>

        <button type="submit" className="btn w-100 text-white mt-3" style={{ backgroundColor: "#5E5A00" }}>
          SUBMIT
        </button>
        <p className="text-center mt-4 fst-italic">
          <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
