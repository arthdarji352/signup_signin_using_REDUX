import React, { useState } from "react";
// import { updateData } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { profileUpdateData } from "../../redux/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const reactImage =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png";

const UpdateData = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const loggedInUser = useSelector((state) => state.allData.loggedInUser);
  console.warn("data in updatedata component", loggedInUser);

  // const loginUser = location.state.currentUser;
  console.log("updatedata", loggedInUser);
  const [input, setInput] = useState({
    // name: "",
    // email: "",
    // id: loggedInUser.id,
    name: loggedInUser.name,
    email: loggedInUser.email,
    id: loggedInUser.id,
    // password: "",
  });

  console.log(input.name, input.email, input.id);
  // const existingUser = loggedInUser.filter((f) => f.id == id);
  // console.log(existingUser[0]);
  // const { name, email } = existingUser[0];
  // const [uname, setName] = useState(loggedInUser.name);
  // const [uemail, setEmail] = useState(loggedInUser.email);
  const [errors, setError] = useState({
    name: "",
    email: "",
    // password: "",
  });

  // const [updateData,setUpdateData]=useState(loginUser)

  // console.log(input.name);
  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name": {
        if (!value.match(/^[a-zA-Z\s]+$/) || value.length < 3) {
          setError((pre) => ({
            ...pre,
            [name]: "plz enter valid Name",
          }));
        } else {
          setError((pre) => ({ ...pre, [name]: "" }));
        }
        break;
      }
      case "email": {
        if (!value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
          setError((pre) => ({ ...pre, [name]: "Pleaese Enter Valid Email" }));
        } else {
          setError((pre) => ({ ...pre, [name]: "" }));
        }
        break;
      }

      //   case "password": {
      //     if (!value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/)) {
      //       setError((pre) => ({
      //         ...pre,
      //         [name]:
      //           "password must contain 8 letters  and include min 1 capital,small,num,special char",
      //       }));
      //     } else {
      //       setError((pre) => ({ ...pre, [name]: "" }));
      //     }
      //     break;
      //   }

      default: {
        break;
      }
    }
    setInput((pre) => ({ ...pre, [name]: value }));
  };

  const updateToast = () =>
    toast.success("Update SuccessFully", {
      position: "top-center",
      autoClose: 1000,
      // theme: "colored",
    });

  const handleSubmit = (event) => {
    event.preventDefault();

    // const { id, name, email } = action.payload;

    // const uu = state.allData.find((user) => user.id == input.id);
    // if (uu) {
    //   uu.name = input.name;
    //   uu.email = input.email;
    // }
    dispatch(
      // profileUpdateData({
      //   id: input.id,
      //   name: input.name,
      //   email: input.email,
      // })
      // console.log(input),
      profileUpdateData(input)
    );
    updateToast();
    // alert("data updated");
    // navigate("/userdetail");

    // if (input.name !== "" && input.email !== "" && input.password !== "") {
    //   if (!emailCheck) {
    //     dispatch(registerData(input));
    //     // alert("data register successfully");
    //     // console
    //     registerToast();
    //   } else {
    //     emailToast();
    //   }
    // } else {
    //   requireFieldToast();
    //   // alert(" please enter all fields");
    // }

    setInput({
      name: "",
      email: "",
      //   password: "",
    });
  };

  return (
    <div>
      <section className="bg-danger bg-opacity-25">
        <div className="d-flex flex-column min-vh-100 justify-content-center">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-10 mx-auto bg-white rounded shadow">
                <div className="row">
                  <div className="col-md-6">
                    <div className="m-5 text-center">
                      <h1>
                        UPDATE
                        <br />
                        userData
                      </h1>
                    </div>

                    <form onSubmit={handleSubmit} className="m-5">
                      {/* <form className="m-5"> */}
                      <div className="mb-3">
                        <label className="form-label">change Name</label>
                        <input
                          className="form-control"
                          type="text"
                          id="username"
                          name="name"
                          value={input.name}
                          onChange={handleChange}
                          autoComplete="username"
                        />
                        {errors.name && (
                          <p className="text-danger">{errors.name}</p>
                        )}
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                          className="form-control"
                          type="email"
                          id="email"
                          name="email"
                          value={input.email}
                          onChange={handleChange}
                          autoComplete="email"
                        />
                        {errors.email && (
                          <p className="text-danger">{errors.email}</p>
                        )}
                      </div>
                      {/* <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    className="form-control"
                    type="password"
                    id="password"
                    name="password"
                    value={input.password}
                    onChange={handleChange}
                    autoComplete="current-password"
                  />
                  {errors.password && (
                    <p className="text-danger">{errors.password}</p>
                  )}
                </div>  */}

                      <div className="">
                        <input
                          type="submit"
                          className="form-control btn btn-primary mt-3"
                          // onClick={notify}
                          // disabled={!validate()}
                          // disabled={isSubmit}
                        />
                        <ToastContainer />

                        {/* <ToastContainer /> */}
                        {/* <SubmitButton /> */}
                      </div>
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
    </div>
  );
};

export default UpdateData;
