import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "../Components/Navbar";
import AddVisaPage from "./AddVisaPage";
import { useLoaderData } from "react-router-dom";

const UserAddedVisa = () => {
  const { user } = useContext(AuthContext);

  const [loading, setLoading] = useState(true);
  const [addedVisaData, setaddedVisaData] = useState([]);

  useEffect(() => {
    setLoading(loading);
    fetch(`http://localhost:5000/visas?email=${user.email}`)
      .then((response) => response.json())
      .then((data) => {
        setaddedVisaData(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, [user.email]);

  return (
    <div className="w-11/12 mx-auto my-4">
      <Navbar></Navbar>
      <div className="p-5">
        <h2 className="font-bold text-xl md:text-3xl my-3 md:my-5">
          Total added Visa: {addedVisaData.length}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-lg">
          {addedVisaData.map((data) => (
            <AddVisaPage
              key={data._id}
              addedVisaData={addedVisaData}
              setaddedVisaData={setaddedVisaData}
              data={data}
            ></AddVisaPage>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserAddedVisa;
