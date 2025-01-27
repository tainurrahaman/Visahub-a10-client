import { createContext } from "react";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const valueInfo = {};
  return (
    <div>
      <AuthContext.Provider value={valueInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
