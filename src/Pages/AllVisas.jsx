import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";

const AllVisas = () => {
  const loadedVisa = useLoaderData();
  const [filteredVisas, setFilteredVisas] = useState(loadedVisa);
  const [selectedType, setSelectedType] = useState("all");

  const handleFilterChange = (event) => {
    const type = event.target.value;
    setSelectedType(type);

    if (type === "all") {
      setFilteredVisas(loadedVisa);
    } else {
      const filtered = loadedVisa.filter((visa) => visa.type === type);
      setFilteredVisas(filtered);
    }
  };

  return (
    <div className="w-11/12 mx-auto my-4">
      <Navbar></Navbar>
      {/* Filter Dropdown */}
      <div className="my-4">
        <label htmlFor="visa-type-filter" className="mr-4 font-semibold">
          Filter by Visa Type:
        </label>
        <select
          id="visa-type-filter"
          className="select select-bordered"
          value={selectedType}
          onChange={handleFilterChange}
        >
          <option value="all">All Visas</option>
          <option value="Tourist">Tourist Visa</option>
          <option value="Business">Business Visa</option>
          <option value="Student">Student Visa</option>
          <option value="Work">Work Visa</option>
          <option value="Family">Family Visa</option>
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-3 md:pt-10 gap-3 md:gap-5">
        {filteredVisas.map((visa) => (
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
              <p>Type: {visa.type}</p>
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
    </div>
  );
};

export default AllVisas;
