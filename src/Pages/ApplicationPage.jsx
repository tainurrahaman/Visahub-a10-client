import Swal from "sweetalert2";

const ApplicationPage = ({ data, visaData, setVisaData }) => {
  const cancelApply = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/visaApply/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "This Visa Application has been deleted.",
                icon: "success",
              });
            }
            const remainingVisa = visaData.filter((visa) => visa._id !== id);
            setVisaData(remainingVisa);
          });
      }
    });
  };

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
        <button
          onClick={() => cancelApply(data._id)}
          className="btn rounded-md w-full bg-[#034833] text-white hover:bg-gray-700 text-[12px] md:text-[14px]"
        >
          Cancel Apply
        </button>
      </div>
    </div>
  );
};

export default ApplicationPage;
