import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";

const AllVisas = () => {
  const loadedVisa = useLoaderData();
  console.log(loadedVisa);

  const handleVisaDetails = (id) => {
    console.log(id);
  };

  return (
    <div className="w-11/12 mx-auto my-4">
      <Navbar></Navbar>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-3 md:pt-10 gap-3 md:gap-5 ">
        {loadedVisa.map((visa) => (
          <div className="rounded-md bg-gray-100 p-3 md:p-5" key={visa._id}>
            <div className="mb-3">
              <img
                className="max-w-full rounded-md h-28 md:h-40"
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
                to={`/allVisas/${visa._id}`}
                state={visa}
                className="btn bg-[#034833] text-white hover:bg-gray-700 text-[12px] md:text-[14px]"
              >
                See Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllVisas;
