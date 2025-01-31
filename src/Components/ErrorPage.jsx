import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center font-bold mt-0 md:mt-5 lg:mt-24 font-montseerat">
      <div className="p-10 md:p-0 mt-24">
        <h2 className="text-5xl md:text-9xl text-red-500 font-bold text-center">
          Error!
        </h2>
        <h3 className="text-3xl md:text-6xl  my-5 md:my-10 text-center">
          Not Found
        </h3>
        <div className="flex justify-center">
          <Link className="btn bg-[#008A7F] text-white" to="/">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
