import React, { useRef, useEffect, useState } from "react";
import Header from "../../components/header/Header";
export default function Home() {
 
  return (
    <>
      <Header />
      <section className="home">
        <div className="formcontainer">
          <h1>A great place for yoga</h1>
        </div>
      </section>
    </>
  );
}
