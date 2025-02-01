// import { Link, useNavigate } from "react-router-dom";
// import { FcGoogle } from "react-icons/fc";
// import Navbar from "./Navbar";
// import { useContext } from "react";
// import { AuthContext } from "../Provider/AuthProvider";
// import Swal from "sweetalert2";

// const Login = () => {
//   const { loginUser } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;

//     loginUser(email, password)
//       .then((result) => {
//         const user = result.user;
//         console.log(user);
//         const lastSignInTime = user.metadata.lastSignInTime;
//         const creationTime = user.metadata.creationTime;
//         const loginUser = { lastSignInTime, creationTime, email };

//         fetch("https://visahub-a10-server.vercel.app/users", {
//           method: "PATCH",
//           headers: {
//             "content-type": "application/json",
//           },
//           body: JSON.stringify(loginUser),
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             console.log(data);
//             if (data.modifiedCount > 0) {
//               Swal.fire({
//                 title: "Login Successful",
//                 icon: "success",
//                 draggable: true,
//               });
//             }
//             navigate("/");
//           });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="w-11/12 mx-auto my-4">
//       <Navbar></Navbar>
//       <div className="hero">
//         <div className="hero-content flex-col mt-3 md:mt-10 w-full md:w-2/4 lg:w-1/3 h-auto">
//           <div className="text-center mb-0 md:mb-10">
//             <h1 className="text-5xl font-bold">Login Now!</h1>
//           </div>
//           <div className="card  w-full shrink-0 shadow-2xl">
//             <form onSubmit={handleLogin}>
//               <div className="card-body ">
//                 <fieldset className="fieldset">
//                   <label className="fieldset-label font-semibold text-[14px]">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     className="input w-full"
//                     placeholder="Email"
//                     required
//                   />
//                   <label className="fieldset-label font-semibold text-[14px]">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     name="password"
//                     className="input w-full"
//                     placeholder="Password"
//                     required
//                   />
//                   <div>
//                     <a className="link link-hover font-semibold text-[14px]">
//                       Forgot password?
//                     </a>
//                   </div>
//                   <button className="btn btn-neutral mt-4 font-semibold text-[16px]">
//                     Login
//                   </button>
//                 </fieldset>
//               </div>
//             </form>
//             <div className="flex justify-center items-center mb-5">
//               <div className="space-y-4">
//                 <Link
//                   //   onClick={handleWithGoogle}
//                   to="/"
//                   className="btn btn-outline  w-[300px] flex items-center justify-center space-x-2 rounded-full"
//                 >
//                   <FcGoogle className=" h-[37px] w-[37px]" />
//                   <span>Continue with Google</span>
//                 </Link>
//               </div>
//             </div>
//             <p className="text-center pb-10 ">
//               Don't have an account?{" "}
//               <Link to="/signup" className="font-semibold">
//                 SignUp
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Navbar from "./Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const { loginUser, setUser, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        navigate("/");
        Swal.fire({
          title: "Login Successful",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-11/12 mx-auto my-4">
      <Navbar></Navbar>
      <div className="hero">
        <div className="hero-content flex-col mt-3 md:mt-10 w-full md:w-2/4 lg:w-1/3 h-auto">
          <div className="text-center mb-0 md:mb-10">
            <h1 className="text-5xl font-bold">Login Now!</h1>
          </div>
          <div className="card w-full shrink-0 shadow-2xl">
            <form onSubmit={handleLogin}>
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="fieldset-label font-semibold text-[14px]">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="input w-full"
                    placeholder="Email"
                    required
                  />
                  <label className="fieldset-label font-semibold text-[14px]">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="input w-full"
                    placeholder="Password"
                    required
                  />
                  <div>
                    <a className="link link-hover font-semibold text-[14px]">
                      Forgot password?
                    </a>
                  </div>
                  <button className="btn btn-neutral mt-4 font-semibold text-[16px]">
                    Login
                  </button>
                </fieldset>
              </div>
            </form>
            <div>
              <p className="text-center pb-10">
                Don't have an account?{" "}
                <Link to="/signup" className="font-semibold">
                  SignUp
                </Link>
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center mb-5">
            <div className="space-y-4">
              <Link
                onClick={handleLoginWithGoogle}
                to="/"
                className="btn btn-outline w-[300px] flex items-center justify-center space-x-2 rounded-full"
              >
                <FcGoogle className="h-[37px] w-[37px]" />
                <span>Continue with Google</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
