import { useState } from "react";
import { createContext } from "react";
import { DataContext } from "./DataState";

export const AuthContext = createContext({
  findUser: [],
  setFindUser: () => {},
});
const AuthState = ({ children }) => {
  const [findUser, setFindUser] = useState({});
  return (
    <DataContext.Provider value={{ findUser, setFindUser }}>
      {children}
    </DataContext.Provider>
  );
};
export default AuthState;
