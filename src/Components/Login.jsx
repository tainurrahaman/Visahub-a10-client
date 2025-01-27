import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
  };
  return (
    <div className="hero">
      <div className="hero-content flex-col mt-10 w-full md:w-2/4 lg:w-1/3 h-auto">
        <div className="text-center mb-0 md:mb-10">
          <h1 className="text-5xl font-bold">Login Now!</h1>
        </div>
        <div className="card  w-full shrink-0 shadow-2xl">
          <form onSubmit={handleLogin}>
            <div className="card-body ">
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
          <div className="flex justify-center items-center mb-5">
            <div className="space-y-4">
              <Link
                //   onClick={handleWithGoogle}
                to="/"
                className="btn btn-outline  w-[300px] flex items-center justify-center space-x-2 rounded-full"
              >
                <FcGoogle className=" h-[37px] w-[37px]" />
                <span>Continue with Google</span>
              </Link>
            </div>
          </div>
          <p className="text-center pb-10 ">
            Don't have an account?{" "}
            <Link to="/signup" className="font-semibold">
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
