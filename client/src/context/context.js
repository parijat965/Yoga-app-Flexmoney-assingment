import { atom } from "recoil";
const formState = atom({
  key: "formState",
  default: {
    email: "",
    fname: "",
    lname: "",
    age: "",
    gender: "",
    batch: "",
  },
});
export { formState };
