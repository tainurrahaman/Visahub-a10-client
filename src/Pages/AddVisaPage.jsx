import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddVisaPage = ({ data, addedVisaData, setaddedVisaData }) => {
  const visas = useLoaderData();
  const navigate = useNavigate();
  const [allVisa, setAllVisa] = useState(addedVisaData);
  const [selectedVisa, setSelectedVisa] = useState([]);

  const [datas, setDatas] = useState([]);

  const handleUpdateClick = (id) => {
    const clickedVisa = allVisa.find((visa) => visa._id === id);

    document.getElementById("updateModal").showModal();
    setSelectedVisa(clickedVisa);

    fetch(`https://visahub-a10-server.vercel.app/visas/all/${id}`)
      .then((res) => res.json())
      .then((item) => {
        setDatas(item);
      });
  };

  const handleVisaUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const method = form.method.value;
    const fee = form.fee.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const visa = form.visa.value;
    const time = form.time.value;
    const validity = form.validity.value;

    const visaUpdate = {
      method,
      fee,
      name,
      photo,
      visa,
      time,
      validity,
    };
    fetch(
      `https://visahub-a10-server.vercel.app/visas/all/${selectedVisa._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(visaUpdate),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Visa Updated Successfully!",
            icon: "success",
            draggable: true,
          });
        }
        navigate("/visas");
      });
    document.getElementById("updateModal").close();
    form.reset();
  };

  const cancelAddedVisa = (id) => {
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
        fetch(`https://visahub-a10-server.vercel.app/visas/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "This Visa has been deleted.",
                icon: "success",
              });
            }
            const remainingVisa = addedVisaData.filter(
              (visa) => visa._id !== id
            );
            setaddedVisaData(remainingVisa);
            const remainingVisas = allVisa.filter((visa) => visa._id !== id);
            setAllVisa(remainingVisas);
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
      <div className="flex justify-between mt-3 text-sm">
        <div className="font-semibold  text-gray-700">
          <p>Country: {data.name}</p>
          <p>Validity: {data.validity}</p>
          <p>Fee: ${data.fee}</p>
        </div>
        <div className="font-semibold text-gray-700">
          <p>Method: {data.method}</p>
          <p>Time: {data.time}</p>
          <p>Visa_Type: {data.type}</p>
        </div>
      </div>
      <div className="mt-3 flex justify-between gap-5">
        <div className="w-full">
          <button
            onClick={() => handleUpdateClick(data._id)}
            className="w-full btn bg-[#034833] text-white py-2 px-4 font-semibold rounded-lg hover:bg-green-700"
          >
            Update
          </button>
          {/* Update Modal  */}
          <dialog
            id="updateModal"
            className="w-3/4 md:w-full mx-auto modal  sm:modal-middle"
          >
            <div className="modal-box p-2 md:p-5">
              <div className="modal-action mt-0">
                <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg p-2 md:p-6 ">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">
                    Visa Update Form
                  </h2>
                  <form onSubmit={handleVisaUpdate} method="dialog">
                    <div className="flex gap-2">
                      <div className="mb-4 w-full">
                        <label className="block text-gray-700 font-semibold mb-2">
                          Country Image
                        </label>
                        <input
                          type="text"
                          name="photo"
                          placeholder="Country PhotoURL"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2">
                      <div className="mb-4 w-full md:w-1/2 ">
                        <label className="block text-gray-700 font-semibold mb-2">
                          Country
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Country Name"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
                        />
                      </div>
                      <div className="mb-4 w-full md:w-1/2 ">
                        <label className="block text-gray-700 font-semibold mb-2">
                          Visa Type
                        </label>
                        <input
                          type="text"
                          name="visa"
                          placeholder="Enter your visa type"
                          className="w-full px-3 py-2 border border-gray-300 bg-gray-100 rounded-md text-gray-700"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex  flex-col md:flex-row gap-2">
                      <div className="mb-4 w-full md:w-1/2">
                        <label className="block text-gray-700 font-semibold mb-2">
                          Processing Time
                        </label>
                        <input
                          type="text"
                          name="time"
                          placeholder="Processing Time"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
                        />
                      </div>
                      <div className="mb-4 w-full md:w-1/2">
                        <label className="block text-gray-700 font-semibold mb-2">
                          Fee
                        </label>
                        <input
                          type="text"
                          name="fee"
                          placeholder="Enter your visa type"
                          className="w-full px-3 py-2 border border-gray-300 bg-gray-100 rounded-md text-gray-700"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex  flex-col md:flex-row gap-2">
                      <div className="mb-4 w-full md:w-1/2">
                        <label className="block text-gray-700 font-semibold mb-2">
                          Application_method
                        </label>
                        <input
                          type="text"
                          name="method"
                          placeholder="Application Method"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
                        />
                      </div>
                      <div className="mb-4 w-full md:w-1/2">
                        <label className="block text-gray-700 font-semibold mb-2">
                          Validity
                        </label>
                        <input
                          type="text"
                          name="validity"
                          placeholder="Enter your visa type"
                          className="w-full px-3 py-2 border border-gray-300 bg-gray-100 rounded-md text-gray-700"
                          required
                        />
                      </div>
                    </div>

                    <div className="mt-6 modal-action">
                      <button className="w-full btn bg-[#034833] text-white py-2 px-4 rounded-md hover:bg-green-700">
                        Apply Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </dialog>
        </div>
        <div className="w-full">
          <button
            onClick={() => cancelAddedVisa(data._id)}
            className="btn rounded-md w-full bg-[#034833] text-white hover:bg-gray-700 text-[12px] md:text-[14px]"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddVisaPage;
