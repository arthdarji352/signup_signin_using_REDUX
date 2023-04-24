import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutData } from "../../../redux/action";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.allData.loggedInUser);
  console.log("loggedInUser data in daseboard loginpage", loggedInUser);
  // const length = Object.keys(loggedInUser).length;
  // console.log(length);
  const handleClick = (e) => {
    e.preventDefault();

    dispatch(logoutData([]));
    navigate("/");
  };
  // console.log(loggedInUser.length);
  return (
    <div className="fixed-top">
      <div className="d-flex bg-danger">
        <div className="p-4 flex-grow-1 bd-highlight">
          <Link to="/" className="text-decoration-none text-light">
            Home
          </Link>
        </div>
        {Object.keys(loggedInUser)?.length > 0 ? (
          <>
            <div className="p-4">
              <Link
                to="/userdetail"
                className="text-decoration-none text-light"
              >
                PROFILE
              </Link>
            </div>
            {/* <div className="p-4">
              <Link
                to="/updatedata"
                className="text-decoration-none text-light"
              >
                UPDATEDATA
              </Link>
            </div> */}
            <div className="p-4">
              <Link
                to="/logout"
                className="text-decoration-none text-light"
                onClick={handleClick}
              >
                LOGOUT
              </Link>
            </div>
            {/* <div>
              <div
                className="btn btn-danger px-3 mt-3 ms-5"
                onClick={handleClick}
              >
                LogOut
              </div>
            </div> */}
          </>
        ) : (
          <>
            <div className="p-4">
              <Link to="/signup" className="text-decoration-none text-light">
                SignUp
              </Link>
            </div>

            <div className="p-4">
              <Link to="/login" className="text-decoration-none text-light">
                Login
              </Link>
            </div>
          </>
        )}

        <div className="p-4">
          <Link to="/service" className="text-decoration-none text-light">
            Services
          </Link>
        </div>

        <div className="p-4">
          <Link to="/contact" className="text-decoration-none text-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
