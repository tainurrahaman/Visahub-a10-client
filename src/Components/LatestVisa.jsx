import { Link, useLoaderData } from "react-router-dom";

const LatestVisa = () => {
  const latestData = useLoaderData();

  return (
    <div className="mt-5">
      <div className="text-center w-2/3 mx-auto pb-5 pt-10">
        <h2 className="text-4xl font-bold">
          {" "}
          Explore the Newest Visa Opportunities
        </h2>
        <p className="font-semibold text-xl p-4">
          Stay updated with the latest visa openings and opportunities available
          for travel, study, or work abroad.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3  pt-3 md:pt-10 gap-3 md:gap-5 ">
        {latestData.map((visa) => (
          <div className="rounded-md bg-gray-100 p-3 md:p-5" key={visa._id}>
            <div className="mb-3">
              <img
                className="w-full rounded-md h-32 md:h-44 lg:h-52"
                src={visa.photo}
                alt="Country Photo"
              />
            </div>
            <div className="font-semibold text-md text-gray-700">
              <p>Country Name: {visa.name}</p>
              <p>Visa Validity: {visa.validity}</p>
              <p>Visa Type: {visa.visa}</p>
              <p>Processing Time: {visa.time}</p>
            </div>
            <div className="flex justify-center items-center mt-3">
              <Link
                to={`/visas/${visa._id}`}
                state={visa}
                className="btn bg-[#034833] text-white  w-full hover:bg-gray-700 text-[12px] md:text-[14px]"
              >
                See Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <p className="font-semibold text-2xl">
          If you want to see all the visa's, click{" "}
          <Link
            to={`/visas`}
            //   state={visa}
            className="btn bg-[#034833] text-white hover:bg-gray-700 text-[12px] md:text-[14px]"
          >
            All Visas
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LatestVisa;
