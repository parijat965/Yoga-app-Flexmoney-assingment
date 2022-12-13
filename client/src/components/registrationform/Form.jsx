import { useFormik } from "formik";
import React, { useState } from "react";
import { AiOutlineGold, AiOutlineUser } from "react-icons/ai";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { SiOpenbadges } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSetRecoilState } from "recoil";
import { formState } from "../../context/context";

function Form() {
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const location=useNavigate();
  const FormState = useSetRecoilState(formState);
  const handelFormSubmit = (values) => {
    values = { ...values, gender: male ? "male" : female ? "female" : null };
    if (parseInt(values.age) < 18 || parseInt(values.age > 65)) {
      toast.warn("You must be within 18 - 65 age range");
      return;
    }
    FormState((old) => {
      return {
        ...old,
        email: values.email,
        fname: values.fname,
        lname: values.lname,
        age: values.age,
        gender: values.gender,
        batch: values.batch,
      };
    });
    formik.resetForm();
    location("payment");
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      fname: "",
      lname: "",
      age: "",
      batch: "",
    },
    onSubmit: handelFormSubmit,
  });
  const handelGender = (gndr) => {
    if (gndr === "male") {
      setFemale(false);
      setMale(true);
    } else {
      setFemale(true);
      setMale(false);
    }
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <h4>Register</h4>
        <div className="formrow">
          <div className="inputContainer full">
            <div className="icon">
              <HiOutlineMail />
            </div>
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="formrow">
          <div className="inputContainer half">
            <div className="icon">
              <AiOutlineUser />
            </div>
            <input
              type="text"
              placeholder="Enter first name"
              name="fname"
              value={formik.values.fname}
              onChange={formik.handleChange}
            />
          </div>
          <div className="inputContainer half">
            <div className="icon">
              <AiOutlineUser />
            </div>
            <input
              type="text"
              placeholder="Enter last name"
              name="lname"
              value={formik.values.lname}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="formrow">
          <div className="inputContainer full">
            <div className="icon">
              <AiOutlineGold />
            </div>
            <input
              type="number"
              placeholder="Enter age"
              name="age"
              value={formik.values.age}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="formrow">
          <div className="inputContainer half selection">
            <label
              className={`icon ${female ? "fill" : "nfill"}`}
              htmlFor="female"
              onClick={() => handelGender("female")}
            >
              <BsGenderFemale />
            </label>
            <input type="radio" id="female" name="gender" hidden />
          </div>
          <div className="inputContainer half selection">
            <label
              className={`icon ${male ? "fill" : "nfill"}`}
              htmlFor="male"
              onClick={() => handelGender("male")}
            >
              <BsGenderMale />
            </label>
            <input type="radio" id="male" name="gender" />
          </div>
        </div>
        <div className="formrow">
          <div className="inputContainer full">
            <div className="icon">
              <SiOpenbadges />
            </div>
            <select
              name="batch"
              value={formik.values.batch}
              onChange={formik.handleChange}
            >
              <option value="B0">Select a batch</option>
              <option value="B1">6.00 A.M - 7.00 A.M</option>
              <option value="B2">7.00 A.M - 8.00 A.M</option>
              <option value="B3">8.00 A.M - 9.00 A.M</option>
              <option value="B4">5.00 P.M - 6.00 P.M</option>
            </select>
          </div>
        </div>
        <button className="btn" style={{ marginTop: "2rem" }}>
          Register
        </button>
      </form>
    </>
  );
}

export default Form;
