import { FaCheckCircle } from "react-icons/fa";

const Choose = () => {
  return (
    <section className="px-6 md:px-16 pb-20 bg-white">
      <div className="text-center w-1/2 mx-auto">
        <h2 className="text-5xl font-bold mb-12">About Us</h2>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Simplifying Immigration <br />{" "}
            <span className="text-green-600">One Step At A Time</span>
          </h2>
          <div className="flex items-center mt-6">
            <span className="text-6xl font-bold text-black">25</span>
            <span className="text-xl font-semibold text-gray-800 ml-3">
              Years Of Working <br /> Experience
            </span>
          </div>
        </div>

        {/* Right Section: Description & Services */}
        <div>
          <p className="text-gray-700 text-lg mb-6">
            Generally, you need a valid passport, photographs, completed
            application forms, and supporting processing documents like proof of
            financial stability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Green Card Application Support",
              "Family Sponsorship Guidance",
              "Visa Application Assistance",
              "Asylum and Refugee Assistance",
              "Asylum and Refugee Support",
              "Business Immigration Solutions",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <FaCheckCircle className="text-red-600" size={20} />
                <span className="text-gray-900 text-[14px] font-semibold">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-5 mt-10">
        <div className="w-3/5 ">
          {" "}
          <img
            className="h-[300px]"
            src="https://i.ibb.co.com/h1hfnJX5/thumb-1.jpg"
            alt=""
          />
        </div>
        <div className="w-2/5">
          <img
            className="h-[300px]"
            src="https://i.ibb.co.com/XxgqbDdg/thumb-2.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Choose;
