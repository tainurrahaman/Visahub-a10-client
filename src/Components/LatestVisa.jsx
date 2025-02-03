import { Link, useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Fade, Slide } from "react-awesome-reveal";

const LatestVisa = () => {
  const latestData = useLoaderData();

  const handleType = (count) => {
    // console.log(count);
  };

  return (
    <div className="mt-5">
      {/* Typewriter Section */}
      <Slide triggerOnce>
        <div className="App text-center p-0 md:p-5">
          <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl">
            See the World{" "}
            <span style={{ color: "#019DA8", fontWeight: "bold" }}>
              <Typewriter
                words={["Decide", "Apply", "Fly", "Repeat!"]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onType={handleType}
              />
            </span>
          </h1>
        </div>
      </Slide>

      {/* Heading and Description Section */}
      <Fade cascade>
        <div className="text-center w-full md:w-2/3 mx-auto pb-5 pt-5 md:pt-10">
          <h2 className="text-2xl sm:text-2xl md:text-4xl font-bold">
            Explore the Newest Visa Opportunities
          </h2>
          <p className="font-normal md:font-semibold text-base sm:text-lg md:text-xl p-0 md:p-4 pt-2 md:pt-0">
            Stay updated with the latest visa openings and opportunities
            available for travel, study, or work abroad.
          </p>
        </div>

        {/* Visa Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 px-4 sm:px-6 lg:px-8">
          {latestData.map((visa) => (
            <div
              className="rounded-md bg-gray-100 p-3 md:p-5 hover:shadow-lg transition-shadow duration-300"
              key={visa._id}
            >
              {/* Visa Image */}
              <div className="mb-3">
                <img
                  className="w-full rounded-md h-40 lg:h-48"
                  src={visa.photo}
                  alt="Country Photo"
                />
              </div>

              {/* Visa Details */}
              <div className="font-semibold text-sm sm:text-base text-gray-700 space-y-2">
                <p>Country: {visa.name}</p>
                <p>Visa Type: {visa.type}</p>
                <p>Processing Time: {visa.time}</p>
              </div>

              {/* See Details Button */}
              <div className="flex justify-center items-center mt-3">
                <Link
                  to={`/visas/${visa._id}`}
                  state={visa}
                  className="btn bg-[#034833] text-white w-full hover:bg-gray-700 text-xs sm:text-sm md:text-base"
                >
                  See Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* All Visas Link */}
        <div className="flex justify-center items-center mt-10">
          <p className="font-semibold text-lg sm:text-xl md:text-2xl">
            If you want to see all the Visa's, Click{" "}
            <Link
              to="/visas"
              className="btn bg-[#034833] text-white hover:bg-gray-700 text-xs sm:text-sm md:text-base"
            >
              All Visas
            </Link>
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default LatestVisa;
