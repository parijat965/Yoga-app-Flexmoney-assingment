require("dotenv").config();
const express = require("express");
const cors = require("cors");
const route = require("./routes/routes");
const app = express();
app.use(express.json());
app.use(cors());
app.use(route)
app.listen(process.env.PORT, (e) => {
  console.log(`listing on ${process.env.PORT}...`);
});
