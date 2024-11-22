import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { Outlet, useLocation } from "react-router-dom";

const Root = () => {
  const { pathname } = useLocation();
  return (
    <div>
      {pathname == "/" || <NavBar></NavBar>}
      <Outlet className="w-11/12 lg:w-4/5 mx-auto"></Outlet>
    </div>
  );
};

export default Root;
