import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";

const VisaDetails = () => {
  const { id } = useParams(); // Access the ID from the URL
  const location = useLocation(); // Access the passed state
  const visa = location.state; // Visa data from state

  return (
    <div className="w-11/12 mx-auto my-4">
      <Navbar />
      <div className="bg-gray-100 p-6 rounded-md shadow-md">
        {visa ? (
          <>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Visa Details for {visa.name}
            </h1>
            <img
              src={visa.photo}
              alt={visa.name}
              className="rounded-md mb-4 w-full max-w-md mx-auto"
            />
            <p className="text-lg">
              <strong>Country:</strong> {visa.name}
            </p>
            <p className="text-lg">
              <strong>Validity:</strong> {visa.validity}
            </p>
            <p className="text-lg">
              <strong>Fee:</strong> {visa.fee}
            </p>
            <p className="text-lg">
              <strong>Description:</strong> {visa.description}
            </p>
          </>
        ) : (
          <p>No details available. Please go back and select a visa.</p>
        )}
      </div>
    </div>
  );
};

export default VisaDetails;
