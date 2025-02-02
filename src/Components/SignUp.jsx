import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Navbar from "./Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.init";
import { toast, ToastContainer } from "react-toastify";

const SignUp = () => {
  const { createUser, setUser, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    if (
      password.length < 6 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password)
    ) {
      toast(
        "Password must be at least 6 characters long, contain an uppercase letter, and a lowercase letter."
      );
      return;
    }

    const newUser = { name, photo, email };

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        // Update user profile with display name and photo URL
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            // Save user data to MongoDB
            fetch("https://visahub-a10-server.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(newUser),
            })
              .then((res) => res.json())
              .then((data) => {
                navigate("/");
                if (data.insertedId) {
                  Swal.fire({
                    title: "Registration Successful",
                    icon: "success",
                    draggable: true,
                  });
                }
              });
          })
          .catch((error) => {
            toast("Error updating profile:", error.message);
          });
      })
      .catch((error) => {
        toast(error);
      });
  };

  const handleWithGoogleSignup = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
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
            <h1 className="text-5xl font-bold">SignUp Now!</h1>
          </div>
          <div className="card w-full shrink-0 shadow-2xl">
            <form onSubmit={handleSignUp}>
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="fieldset-label font-semibold text-[14px]">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="input w-full"
                    placeholder="Name"
                    required
                  />
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
                  <label className="fieldset-label font-semibold text-[14px]">
                    Photo URL
                  </label>
                  <input
                    type="text"
                    name="photo"
                    className="input w-full"
                    placeholder="Photo URL"
                    required
                  />
                  <button className="btn btn-neutral mt-4 font-semibold text-[16px]">
                    Register
                  </button>
                </fieldset>
              </div>
            </form>

            <div>
              <p className="text-center pb-10">
                Already have an account?{" "}
                <Link to="/login" className="font-semibold">
                  LogIn
                </Link>
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center mb-5">
            <div className="space-y-4">
              <Link
                onClick={handleWithGoogleSignup}
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

export default SignUp;
