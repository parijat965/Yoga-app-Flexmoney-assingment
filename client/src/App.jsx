import React, { useState } from "react";
import Homepage from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/register/Register";
import ChangeBatch from "./pages/changebatch/View";
import Form from "./components/registrationform/Form";
import Payment from "./components/paymentform/Payment";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />}>
          <Route index element={<Form />} />
          <Route path="payment" element={<Payment/>} />
        </Route>
        <Route path="/" element={<Homepage />} />
        <Route path="/changeBatch" element={<ChangeBatch />} />
      </Routes>
    </>
  );
};
