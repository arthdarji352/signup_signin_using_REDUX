import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { deleteUser, logoutData } from "../../redux/action";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const UserDatas = () => {
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

  const deleteToast = () =>
    toast.success("User DELETE Successfully", {
      position: "top-center",
      autoClose: 1000,
      // theme: "colored",
    });
  // const updateHandle = (data) => {
  //   console.log(data);
  //   navigate(`/updatedata/:${data.index}`, {
  //     state: { currentUser: data },
  //   });
  //   // navigate("/updatedata");
  // };

  const handleClick = () => {
    dispatch(logoutData([]));
    // logOutToast();

    navigate("/signin");
  };

  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
    navigate("/signup");
    // deleteToast();
  };

  return (
    // <>
    //   <section className="services text-center py-5 my-5">
    //     <div className="container-lg py-4">
    //       <div className="row justify-content-center">
    //         <div className="col-lg-8">
    //           <div className="section-title text-center">
    //             <h2 className="fw-bold mb-5">User Data</h2>
    //             <h2 className="fw-bold mb-5">name :- {loggedInUser.name}</h2>
    //             <h2 className="fw-bold mb-5">Email :-{loggedInUser.email}</h2>
    //             <div
    //               className="btn btn-danger px-3 mt-3 ms-5"
    //               onClick={handleClick}
    //             >
    //               LogOut
    //             </div>
    //             <div
    //               className="btn btn-danger px-3 mt-3 ms-5"
    //               onClick={() => updateHandle(loggedInUser)}
    //             >
    //               UPDATE
    //             </div>
    //             {/* <ToastContainer /> */}
    //             {/* <Link
    //               to="signup"
    //               //   onClick={handleClick}
    //               className="btn btn-danger px-3 mt-3 ms-5"
    //             >
    //               Log Out
    //             </Link> */}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </>

    <div className="container userdatas">
      <h2>USER DATA-READ,UPDATE,DELETE</h2>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {/* {users.map((user, index) => ( */}
          <tr>
            <td>{loggedInUser.id}</td>
            <td>{loggedInUser.name}</td>
            <td>{loggedInUser.email}</td>
            <td>
              <Link
                to={`/edit/${loggedInUser.id}`}
                className="btn btn-sm btn-primary"
              >
                Edit
              </Link>

              <button
                onClick={() => handleDelete(loggedInUser.id)}
                className="btn btn-sm btn-danger ms-2"
              >
                Delete
              </button>

              {/* <button
                  onClick={() => handleDelete(user.id)}
                  className="btn btn-sm btn-danger ms-2"
                >
                  Delete
                </button> */}
            </td>
          </tr>
          {/* ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default UserDatas;
// import React from "react";

// const UserDatas = () => {
//   return <div>UserDatas</div>;
// };

// export default UserDatas;
