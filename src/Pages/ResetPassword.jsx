import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../Firebase/firebase.init";

const ResetPassword = () => {
  const navigate = useNavigate();

  const handlePasswordReset = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast("Password reset email sent..Pls check your email");
      })
      .catch((err) => {
        toast(err.message);
      });
    navigate("/login");
  };

  return (
    <div className="font-montseerat mx-10">
      <div className="flex flex-col justify-center items-center border-2 mt-20 w-full md:w-1/3 py-10 rounded-lg mx-auto">
        <h2 className="font-bebasNueue text-2xl md:text-4xl pb-10">
          Password Reset
        </h2>
        <form onSubmit={handlePasswordReset} className="w-full px-20">
          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <button className="btn bg-[#009286] hover:bg-gray-800 rounded-md w-full mb-4 text-white">
            Password Reset
          </button>
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ResetPassword;
