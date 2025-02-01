import { Link, useLoaderData } from "react-router-dom";

const LatestVisa = () => {
  const latestData = useLoaderData();

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-3 md:pt-10 gap-3 md:gap-5 ">
        {latestData.map((visa) => (
          <div className="rounded-md bg-gray-100 p-3 md:p-5" key={visa._id}>
            <div className="mb-3">
              <img
                className="w-full rounded-md h-28 md:h-40"
                src={visa.photo}
                alt="Country Photo"
              />
            </div>
            <div className="font-semibold text-md text-gray-700">
              <p>Country: {visa.name}</p>
              <p>Validity: {visa.validity}</p>
              <p>Fee: {visa.fee}</p>
            </div>
            <div className="flex justify-center items-center mt-3">
              <Link
                to={`/visas/${visa._id}`}
                state={visa}
                className="btn bg-[#034833] text-white hover:bg-gray-700 text-[12px] md:text-[14px]"
              >
                See Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-3">
        <Link
          to={`/visas`}
          //   state={visa}
          className="btn bg-[#034833] text-white hover:bg-gray-700 text-[12px] md:text-[14px]"
        >
          All Visas
        </Link>
      </div>
    </div>
  );
};

export default LatestVisa;
