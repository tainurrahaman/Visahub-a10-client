import { useLocation, useNavigate, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const VisaDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const location = useLocation();
  const visa = location.state;
  const navigate = useNavigate();

  // console.log(visa);

  const handleVisaApplication = (e) => {
    e.preventDefault();
    document.getElementById("my_modal_5").close();

    const form = e.target;
    const email = form.email.value;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const appliedDate = form.appliedDate.value;
    const fee = form.fee.value;
    const country = form.country.value;
    const photo = form.photo.value;
    const visa = form.visa.value;
    const time = form.time.value;
    const validity = form.validity.value;

    const visaApply = {
      email,
      firstName,
      lastName,
      appliedDate,
      fee,
      country,
      photo,
      visa,
      time,
      validity,
    };
    fetch("https://visahub-a10-server.vercel.app/visaApply", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(visaApply),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Your application is Successful!",
            icon: "success",
            draggable: true,
          });
        }
        navigate("/visas");
      });
    form.reset();
  };

  return (
    <div className="w-11/12 mx-auto my-4">
      <Navbar />
      <div className=" p-6 rounded-md ">
        {visa ? (
          <div className="w-full md:w-2/3 lg:w-1/2 mx-auto bg-gray-100 p-0 md:p-5 rounded-lg">
            {" "}
            <div className="w-full flex flex-col md:flex-row bg-white shadow-lg rounded-lg gap-5 p-3 md:p-5">
              <div className="w-1/2 mx-auto">
                <img
                  className="w-full rounded-md"
                  src={visa.photo}
                  alt={`${visa.name} Visa`}
                />
              </div>
              <div className=" px-5">
                <h2 className="text-xl md:text-3xl font-bold mb-2">
                  {visa.name}
                </h2>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Visa Type:</span> {visa.visa}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Processing Time:</span>{" "}
                  {visa.time}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Description:</span>{" "}
                  {visa.description}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Age Restriction:</span>{" "}
                  {visa.age} years
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Validity:</span>{" "}
                  {visa.validity}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Application Method:</span>{" "}
                  {visa.method}
                </p>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">Fee:</span> ${visa.fee}
                </p>
                <button
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                  className="w-full btn bg-[#034833] text-white py-2 px-4 font-semibold rounded-lg hover:bg-green-700"
                >
                  Apply for Visa
                </button>
                <dialog
                  id="my_modal_5"
                  className="w-3/4 md:w-full mx-auto modal  sm:modal-middle"
                >
                  <div className="modal-box p-2 md:p-5">
                    <div className="modal-action mt-0">
                      <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg p-2 md:p-6 ">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">
                          Visa Application Form
                        </h2>
                        <form onSubmit={handleVisaApplication} method="dialog">
                          <div className="flex gap-2">
                            <div className="mb-4 w-1/2">
                              <label className="block text-gray-700 font-semibold mb-2">
                                Email
                              </label>
                              <input
                                type="email"
                                name="email"
                                defaultValue={user.email}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
                              />
                            </div>
                            <div className="mb-4 w-1/2">
                              <label className="block text-gray-700 font-semibold mb-2">
                                Country
                              </label>
                              <input
                                type="text"
                                name="country"
                                defaultValue={visa.name}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <div className="mb-4 w-1/2">
                              <label className="block text-gray-700 font-semibold mb-2">
                                First Name
                              </label>
                              <input
                                type="text"
                                name="firstName"
                                placeholder="Enter your first name"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                required
                              />
                            </div>
                            <div className="mb-4 w-1/2">
                              <label className="block text-gray-700 font-semibold mb-2">
                                Last Name
                              </label>
                              <input
                                type="text"
                                name="lastName"
                                placeholder="Enter your last name"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                required
                              />
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <div className="mb-4 w-1/2">
                              <label className="block text-gray-700 font-semibold mb-2">
                                Applied Date
                              </label>
                              <input
                                type="date"
                                name="appliedDate"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
                              />
                            </div>
                            <div className="mb-4 w-1/2">
                              <label className="block text-gray-700 font-semibold mb-2">
                                Fee
                              </label>
                              <input
                                type="number"
                                name="fee"
                                defaultValue={visa.fee}
                                placeholder="Visa Fee"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <div className="mb-4 w-1/2">
                              <label className="block text-gray-700 font-semibold mb-2">
                                Country image
                              </label>
                              <input
                                type="text"
                                name="photo"
                                defaultValue={visa.photo}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
                              />
                            </div>
                            <div className="mb-4 w-1/2">
                              <label className="block text-gray-700 font-semibold mb-2">
                                Visa_type
                              </label>
                              <input
                                type="text"
                                name="visa"
                                defaultValue={visa.visa}
                                placeholder="Visa Fee"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <div className="mb-4 w-1/2">
                              <label className="block text-gray-700 font-semibold mb-2">
                                Processing_time
                              </label>
                              <input
                                type="text"
                                name="time"
                                defaultValue={visa.time}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
                              />
                            </div>
                            <div className="mb-4 w-1/2">
                              <label className="block text-gray-700 font-semibold mb-2">
                                Validity
                              </label>
                              <input
                                type="text"
                                name="validity"
                                defaultValue={visa.validity}
                                placeholder="Visa Fee"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
                              />
                            </div>
                          </div>
                          <div className="mt-6 modal-action">
                            <button className="w-full btn bg-[#034833] text-white py-2 px-4 rounded-md hover:bg-green-700">
                              Apply
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        ) : (
          <p>No details available. Please go back and select a visa.</p>
        )}
      </div>
    </div>
  );
};

export default VisaDetails;
