const { Router } = require("express");
const Register = require("../controller/index");
const ChangeBatch = require("../controller/changeBadge");
const Payment = require("../controller/payment");

const route = Router();

route.post("/api/v1/register", Register);
route.post("/api/v1/change", ChangeBatch);
route.post("/api/v1/payment", Payment);

module.exports = route;
