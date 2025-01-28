import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const VisaApplication = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <h2>visa app</h2>
    </div>
  );
};

export default VisaApplication;
