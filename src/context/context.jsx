import React, { createContext, useState } from "react";

export const context = createContext();

export default function ContextProvider({ children }) {
  const initArray = ["widget 1", "widget 2"];
  const [array, setArray] = useState(initArray);
  return (
    <context.Provider value={{ array, setArray }}>{children}</context.Provider>
  );
}
