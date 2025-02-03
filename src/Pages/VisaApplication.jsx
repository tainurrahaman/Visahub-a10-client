import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "../Components/Navbar";
import ApplicationPage from "./ApplicationPage";
import { toast, ToastContainer } from "react-toastify";

const VisaApplication = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [visaData, setVisaData] = useState([]);
  const [filteredVisaData, setFilteredVisaData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(`https://visahub-a10-server.vercel.app/visaApply?email=${user.email}`)
      .then((response) => response.json())
      .then((data) => {
        setVisaData(data);
        setFilteredVisaData(data);
        setLoading(false);
      })
      .catch((error) => {
        toast("Error fetching visa data:", error);
        setLoading(false);
      });
  }, [user.email]);

  // Handle search functionality
  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setFilteredVisaData(visaData);
    } else {
      const filtered = visaData.filter((data) =>
        data.country.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredVisaData(filtered);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-11/12 mx-auto my-4">
      <Navbar></Navbar>
      <div className="p-5">
        <h2 className="font-bold text-xl md:text-3xl my-3 md:my-5">
          Total Application: {filteredVisaData.length}
        </h2>

        {/* Search Input and Button */}
        <div className="flex gap-3 mb-5">
          <input
            type="text"
            placeholder="Search by country name..."
            className="input input-bordered w-full max-w-xs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={handleSearch}
            className="btn bg-[#034833] text-white"
          >
            Search
          </button>
        </div>

        {/* Visa Application Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-lg">
          {filteredVisaData.map((data) => (
            <ApplicationPage
              key={data._id}
              visaData={visaData}
              setVisaData={setVisaData}
              data={data}
            ></ApplicationPage>
          ))}
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default VisaApplication;
