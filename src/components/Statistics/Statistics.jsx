import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Statistics = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = "Statistics | Gadget Heaven";
  }, []);
  return <div></div>;
};

export default Statistics;
