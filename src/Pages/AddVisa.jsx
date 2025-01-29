import { data } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { toast, ToastContainer } from "react-toastify";

const AddVisa = () => {
  const visaTypes = [
    "Tourist visa",
    "Student visa",
    "Official visa",
    "Business visa",
    "Family visa",
  ];
  const documentOptions = [
    "Valid passport",
    "Visa application form",
    "Recent passport-sized photograph",
  ];

  const handleAddVisa = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const visa = form.visa.value;
    const time = form.time.value;
    const description = form.description.value;
    const age = form.age.value;
    const validity = form.validity.value;
    const method = form.method.value;
    const fee = form.fee.value;

    const newVisa = {
      name,
      photo,
      visa,
      time,
      description,
      age,
      validity,
      method,
      fee,
    };

    fetch("https://visahub-a10-server.vercel.app/visas", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newVisa),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast("New Visa added Successfully");
        }
      });
  };

  return (
    <div className="w-11/12 mx-auto my-4">
      <Navbar></Navbar>
      <div className="flex justify-center items-center min-h-screen ">
        <div className="w-full md:w-1/2 max-w-4xl shadow-xl bg-white rounded-2xl p-6">
          <h1 className="text-3xl text-center font-bold mb-8">Add Visa</h1>
          <form onSubmit={handleAddVisa} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Country Image URL:
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter country image URL"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Country Name:
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter country name"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Visa Type:
              </label>
              <select name="visa" className="select select-bordered w-full">
                <option value="">Select Visa Type</option>
                {visaTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Processing Time:
              </label>
              <input
                type="text"
                name="time"
                placeholder="Enter processing time"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Required Documents:
              </label>
              <div className="flex flex-wrap gap-2">
                {documentOptions.map((doc, index) => (
                  <label key={index} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="requiredDocuments"
                      value={doc}
                      className="checkbox checkbox-primary"
                    />
                    <span>{doc}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Description:
              </label>
              <textarea
                name="description"
                placeholder="Enter description"
                className="textarea textarea-bordered w-full"
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Age Restriction:
              </label>
              <input
                type="number"
                name="age"
                placeholder="Enter age restriction"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Fee:</label>
              <input
                type="number"
                name="fee"
                placeholder="Enter fee"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Validity:
              </label>
              <input
                type="text"
                name="validity"
                placeholder="Enter validity"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Application Method:
              </label>
              <input
                type="text"
                name="method"
                placeholder="Enter application method"
                className="input input-bordered w-full"
              />
            </div>
            <button type="submit" className="btn btn-primary w-full mb-5">
              Add Visa
            </button>
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddVisa;
