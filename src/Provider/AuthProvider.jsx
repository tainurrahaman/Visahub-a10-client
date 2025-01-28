import { createContext } from "react";
import auth from "../Firebase/firebase.init";
export const AuthContext = createContext(null);
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const valueInfo = { createUser, loginUser };
  return (
    <div>
      <AuthContext.Provider value={valueInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
