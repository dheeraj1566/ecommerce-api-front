import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function First() {
  return (
    <>
      <Header />
      <main className="px-12 py-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default First;
