import { Fade } from "react-awesome-reveal";
import { FaCheckCircle } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-16 py-6 md:py-10 pb-0 md:pb-10 bg-white">
      {/* Heading Section */}
      <div className="text-center w-full md:w-1/2 mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-12">
          About Us
        </h2>
      </div>
      <Fade cascade>
        {/* Main Content Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* Left Section: Title & Years of Experience */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Simplifying Immigration <br />{" "}
              <span className="text-green-600">One Step At A Time</span>
            </h2>
            <div className="flex items-center mt-4 md:mt-6">
              <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-black">
                25
              </span>
              <span className="text-lg sm:text-xl md:text-xl font-semibold text-gray-800 ml-3">
                Years Of Working <br /> Experience
              </span>
            </div>
          </div>

          {/* Right Section: Description & Services */}
          <div>
            <p className="text-gray-700 text-base sm:text-lg mb-6">
              Generally, you need a valid passport, photographs, completed
              application forms, and supporting processing documents like proof
              of financial stability.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {[
                "Green Card Application Support",
                "Family Sponsorship Guidance",
                "Visa Application Assistance",
                "Asylum and Refugee Assistance",
                "Asylum and Refugee Support",
                "Business Immigration Solutions",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <FaCheckCircle className="text-red-600" size={18} />
                  <span className="text-gray-900 text-sm sm:text-[14px] font-semibold">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-5 mt-8 md:mt-10">
          <div className="w-full sm:w-3/5">
            <img
              className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-lg"
              src="https://i.ibb.co.com/h1hfnJX5/thumb-1.jpg"
              alt="Thumbnail 1"
            />
          </div>
          <div className="w-full sm:w-2/5">
            <img
              className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-lg"
              src="https://i.ibb.co.com/XxgqbDdg/thumb-2.jpg"
              alt="Thumbnail 2"
            />
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default AboutUs;
