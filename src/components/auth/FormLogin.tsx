import { useState, ChangeEvent, FormEvent, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { API, setAuthToken } from "../../libs/api";
import { UserCtx } from "../../libs/MyContext";

type Login = {
  email: string;
  password: string;
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [_, dispatch] = useContext(UserCtx)!;
  const navigate = useNavigate();

  const [user, setUser] = useState<Login>({
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
        "Content-type": "application/json",
      };

      const response = await API.post("/auth/login", user, { headers });

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: response.data,
      });

      setAuthToken(localStorage.token);

      console.log(response.data);
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="container mt-5 bg-light w-50 rounded-3">
        <h1 className="text-center pt-5 fw-bold " style={{ color: "#5E5A00" }}>
          <div style={{ fontSize: "80px" }}>
            <i className="fa-solid fa-user"></i>
          </div>
          <p className="text-center mt-4 fst-italic"></p>
          LOGIN
        </h1>
        <form onSubmit={HandleSubmit} className="w-75 mx-auto py-5">
          <div className="mb-3">
            <label htmlFor="userName" className="form-label fw-bold" style={{ color: "#5E5A00" }}>
              Username
            </label>
            <input onChange={handleChange} type="email" className="form-control" id="userName" name="email" />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-bold" style={{ color: "#5E5A00" }}>
              Password
            </label>
            <div style={{ display: "flex", position: "relative" }}>
              <input onChange={handleChange} type={showPassword ? "text" : "password"} className="form-control" id="password" name="password" />
              <div onClick={() => setShowPassword(!showPassword)} style={{ cursor: "pointer", position: "absolute", right: 20, top: 7 }}>
                {showPassword ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
              </div>
            </div>
          </div>

          <button type="submit" className="btn w-100 text-white" style={{ backgroundColor: "#5E5A00" }}>
            SUBMIT
          </button>
          <p className="text-center mt-4 fst-italic">
            Belum memiliki akun ? <a href="/register">Register</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
