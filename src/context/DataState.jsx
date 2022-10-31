import { useState } from "react";
import { createContext } from "react";

export const DataContext = createContext({
  order: [],
  setOrder: () => {},
});
const DataState = ({ children }) => {
  const [order, setOrder] = useState({});
  return (
    <DataContext.Provider value={{ order, setOrder }}>
      {children}
    </DataContext.Provider>
  );
};
export default DataState;
