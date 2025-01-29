import { Link } from "react-router-dom";

const ApplicationPage = ({ data }) => {
  console.log(data);
  return (
    <div className="rounded-md bg-gray-100 p-3 md:p-5">
      <div className="mb-3 w-full">
        <img
          className="w-full rounded-md max-h-36 md:max-h-44"
          src={data.photo}
          alt="Country Photo"
        />
      </div>
      <div className="font-semibold text-md text-gray-700">
        <p>Applicant's Name: {data.firstName + data.lastName}</p>
        <p>Email: {data.email}</p>
      </div>
      <div className="flex justify-between mt-3 text-sm">
        <div className="font-semibold  text-gray-700">
          <p>Country: {data.country}</p>
          <p>Validity: {data.validity}</p>
          <p>Visa_type: {data.validity}</p>
        </div>
        <div className="font-semibold text-gray-700">
          <p>Fee: ${data.fee}</p>
          <p>Processing_time: {data.time}</p>
          <p>Applied_date: {data.appliedDate}</p>
        </div>
      </div>
      <div className="mt-3">
        <button className="btn rounded-md w-full bg-[#034833] text-white hover:bg-gray-700 text-[12px] md:text-[14px]">
          Cancel Apply
        </button>
      </div>
    </div>
  );
};

export default ApplicationPage;
