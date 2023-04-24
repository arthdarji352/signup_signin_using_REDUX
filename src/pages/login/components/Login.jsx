import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginData } from "../../../redux/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const reactImage =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [errors, setError] = useState({
    email: "",
    password: "",
  });
  const allUsers = useSelector((state) => state.allData.users);

  console.log("userdata in loginpage", allUsers);

  const loginToast = () =>
    toast.success("Login SuccessFully", {
      position: "top-center",
      autoClose: 1000,
      theme: "colored",
    });

  const wrongToast = () =>
    toast.error("wrong Email or Password", {
      position: "top-center",
      autoClose: 1000,
      theme: "dark",
    });

  const handleLogin = (e) => {
    e.preventDefault();

    const loginUser = allUsers.find(
      (user) => user.email === input.email && user.password === input.password
    );

    if (loginUser) {
      loginToast();
      const auth = loginUser;
      dispatch(loginData(auth));

      // alert("login successfully");

      // navigate("/userdetail");
    } else {
      // alert("wrong Email or Password");
      wrongToast();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email": {
        if (!value) {
          setError((pre) => ({ ...pre, [name]: "Pleaese Enter Email" }));
        } else {
          setError((pre) => ({ ...pre, [name]: "" }));
        }
        break;
      }
      case "password": {
        if (!value) {
          setError((pre) => ({
            ...pre,
            [name]: " Please enter password",
          }));
        } else {
          setError((pre) => ({ ...pre, [name]: "" }));
        }
        break;
      }
      default: {
        break;
      }
    }
    setInput((pre) => ({ ...pre, [name]: value }));
  };
  return (
    <section>
      <div className="d-flex flex-column min-vh-100 justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-10 mx-auto bg-white rounded shadow">
              <div className="row">
                <div className="col-md-6">
                  <div className="m-5 text-center">
                    <h1>
                      Welcome!
                      <br />
                      Login
                    </h1>
                  </div>

                  <form onSubmit={handleLogin} className="m-5">
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        className="form-control"
                        type="email"
                        id="username"
                        name="email"
                        value={input.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <p className="text-danger">{errors.email}</p>
                      )}
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input
                        className="form-control"
                        type="password"
                        id="password"
                        name="password"
                        value={input.password}
                        onChange={handleChange}
                      />
                      {errors.password && (
                        <p className="text-danger">{errors.password}</p>
                      )}
                    </div>

                    <div className="">
                      <input
                        type="submit"
                        className="form-control btn btn-primary mt-3"
                      />
                    </div>
                    <ToastContainer />
                  </form>
                </div>
                <div className="col-md-6">
                  <div>
                    <img
                      src={reactImage}
                      alt="login"
                      className="img-fluid p-5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;

// import React from "react";

// const Login = () => {
//   return <div>Login</div>;
// };

// export default Login;
