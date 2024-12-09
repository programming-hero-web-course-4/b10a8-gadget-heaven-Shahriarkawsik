import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";

const Root = () => {
  const { pathname } = useLocation();
  return (
    <div>
      {pathname == "/" || <NavBar></NavBar>}
      <div className="w-11/12 lg:w-4/5 mx-auto min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
