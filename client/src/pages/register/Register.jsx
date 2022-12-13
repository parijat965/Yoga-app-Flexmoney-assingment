import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../../components/header/Header";
import Form from "../../components/registrationform/Form";
export default function Register() {
  return (
    <>
      <Header />
      <section className="home">
        <div className="formcontainer">
          <Outlet/>
        </div>
      </section>
    </>
  );
}
