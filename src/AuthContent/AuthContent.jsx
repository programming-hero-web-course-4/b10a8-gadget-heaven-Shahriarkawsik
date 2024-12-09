import React, { createContext, useState } from "react";

export const gadgetContext = createContext(null);
const AuthContent = ({ children }) => {
  const [gadgetCard, setGadgetCard] = useState([]);
  const [gadgetWishlist, setGadgetWishlist] = useState([]);
  const authInfo = {
    gadgetCard,
    setGadgetCard,
    gadgetWishlist,
    setGadgetWishlist,
  };
  return (
    <gadgetContext.Provider value={authInfo}>{children}</gadgetContext.Provider>
  );
};

export default AuthContent;
