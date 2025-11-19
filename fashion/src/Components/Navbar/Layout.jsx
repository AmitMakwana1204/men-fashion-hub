// Layout.jsx
import React from "react";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* All child routes will appear here */}
    </>
  );
};

export default Layout;
