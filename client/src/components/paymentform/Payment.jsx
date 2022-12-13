import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";
import { formState } from "../../context/context";

export default function Payment() {
  const data = useRecoilValue(formState);
  const location=useNavigate();
  const payment = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/api/v1/payment", {}).then((response) => {
      if (response.data.ResponseCode === 7) {
        register();
      }
    });
  };
  const register = () => {
    axios
      .post("http://localhost:3000/api/v1/register", {
        email: data.email,
        fname: data.fname,
        lname: data.lname,
        age: data.age,
        gender: data.gender,
        batch: data.batch,
      })
      .then((response) => {
        if (response.data.ResponseCode === 1) {
          toast.success(response.data.message);
          location("/")
        } else {
          toast.error("Something went wrong");
        }
      })
      .catch((error) => {
        toast.error("Something went wrong");
      });
  };
  return (
    <>
      <form>
        <h4>Payment</h4>
        <div className="formrow">
          <div className="inputContainer full">
            <h3>Rs. 500.00</h3>
          </div>
        </div>
        <button className="btn" style={{ marginTop: "2rem" }} onClick={payment}>
          Pay
        </button>
      </form>
    </>
  );
}
