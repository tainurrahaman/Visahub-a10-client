import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "../Components/Navbar";
import ApplicationPage from "./ApplicationPage";

const UserAddedVisa = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [visaData, setVisaData] = useState([]);

  useEffect(() => {
    setLoading(loading);
    fetch(`http://localhost:5000/visas?email=${user.email}`)
      .then((response) => response.json())
      .then((data) => {
        setVisaData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [user.email]);

  return (
    <div className="w-11/12 mx-auto my-4">
      <Navbar></Navbar>
      <div className="p-5">
        <h2 className="font-bold text-xl md:text-3xl my-3 md:my-5">
          Total Application: {visaData.length}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-lg">
          {visaData.map((data) => (
            <ApplicationPage
              key={data._id}
              visaData={visaData}
              setVisaData={setVisaData}
              data={data}
            ></ApplicationPage>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserAddedVisa;
