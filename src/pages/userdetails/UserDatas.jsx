import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { logoutData } from "../../redux/action";

const UserDatas = ({ name, email }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   const authData = JSON.parse(localStorage.getItem("auth"));
  //   console.log(authData);
  //   const [all, setAll] = useState(authData);
  // const handleClick = () => {
  //   localStorage.removeItem("auth");
  //   // window.location.reload;
  //   navigate("/");
  // };

  const loggedInUser = useSelector((state) => state.allData.loggedInUser);

  console.log("loggedInUser data in daseboard loginpage", loggedInUser);

  const handleClick = () => {
    dispatch(logoutData([]));
    navigate("/");
  };

  return (
    <>
      <section className="services text-center py-5 my-5">
        <div className="container-lg py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <h2 className="fw-bold mb-5">User Data</h2>
                <h2 className="fw-bold mb-5">name :- {name}</h2>
                <h2 className="fw-bold mb-5">Email :-{email}</h2>
                <div
                  className="btn btn-danger px-3 mt-3 ms-5"
                  onClick={handleClick}
                >
                  LogOut
                </div>
                {/* <Link
                  to="signup"
                  //   onClick={handleClick}
                  className="btn btn-danger px-3 mt-3 ms-5"
                >
                  Log Out
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserDatas;
// import React from "react";

// const UserDatas = () => {
//   return <div>UserDatas</div>;
// };

// export default UserDatas;
