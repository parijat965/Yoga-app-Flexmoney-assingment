import Header from "../../components/header/Header";
import { HiOutlineMail } from "react-icons/hi";
import { SiOpenbadges } from "react-icons/si";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ChangeBatch() {
  const location = useNavigate();
  const handelFormSubmit = (values) => {
    if (values.batch == "B0") {
      toast.warn("Choose batch");
    } else if (values.email == "") {
      toast.warn("Enter Email");
    } else {
      axios
        .post("http://localhost:3000/api/v1/change", {
          email: values.email,
          batch: values.batch,
        })
        .then((response) => {
          if (response.data.ResponseCode === 5) {
            toast.success(response.data.message);
            location("/");
          } else {
            toast.error(response.data.message);
          }
          formik.resetForm();
        })
        .catch((error) => {
          toast.error("Something went wrong");
        });
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      batch: "",
    },
    onSubmit: handelFormSubmit,
  });
  return (
    <>
      <Header />
      <section className="home">
        <div className="formcontainer">
          <form onSubmit={formik.handleSubmit}>
            <h4>Change Batch</h4>
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
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
